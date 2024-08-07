const fs = require('fs');
const XLSX = require('xlsx');
const boom = require('@hapi/boom');

const { models } = require('./../Libs/sequelize');

class AddressesService {
  constructor() {}

  async create(data) {
    console.log(data);
    const newAddress = await models.Addresses.create(data);
    return newAddress;
  }

  async uploadExcel(filePath) {
    const failedInserts = [];
    try {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[1]; // Segunda hoja (índice 1)
      const worksheet = workbook.Sheets[sheetName];
  
      const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
      // Se asume que la primera fila contiene los encabezados
      const headers = rows[0];
      const dataRows = rows.slice(1);
  
      for (const row of dataRows) {
        const address = {
          postalCode: row[0] || 'N',        // d_codigo
          nameSettlement: row[1] || 'N',    // d_asenta
          typeSettlement: row[2] || 'N',    // d_tipo_asenta
          nameMunicipality: row[3] || 'N',  // D_mnpio
          stateName: row[4] || 'N',         // d_estado
          cityName: row[5] || 'N',          // d_ciudad
        };
  
        try {
          await models.Addresses.create(address);
        } catch (error) {
          console.error('Failed to insert address:', address, error);
          failedInserts.push({ address, error });
        }
      }
  
      if (failedInserts.length > 0) {
        console.warn('Some records failed to insert:', failedInserts);
        throw boom.internal('Some records failed to insert', failedInserts);
      }
  
      return { message: 'All records inserted successfully' };
  
    } catch (error) {
      console.error('Error processing the Excel file:', error);
      throw boom.internal('Error processing the Excel file', error);
    } finally {
      // Eliminar el archivo una vez procesado
      fs.unlinkSync(filePath);
    }
  }
  
  
  async find() {
    const rta = await models.Addresses.findAll();
    return rta;
  }

  async findOne(id) {
    const address = await models.Addresses.findByPk(id);
    if (!address) {
      throw boom.notFound('Address not found');
    }
    return address;
  }

  async update(id, changes) {
    const address = await this.findOne(id);
    const rta = await address.update(changes);
    return rta;
  }

  async delete(id) {
    const address = await this.findOne(id);
    await address.destroy();
    return { id };
  }
}

module.exports = AddressesService;