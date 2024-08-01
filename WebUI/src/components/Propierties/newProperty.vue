<template>
    <form @submit.prevent="submitForm">
      <section>
        <h2>Información básica</h2>
        <div>
          <label for="propertyType">Tipo de propiedad:</label>
          <select v-model="property.propertyType" id="propertyType">
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <!-- Añade más opciones según la lista en el documento -->
          </select>
        </div>
        <div>
          <label for="location">Ubicación:</label>
          <input v-model="property.location" id="location" type="text">
          <label>
            <input v-model="property.approximateLocation" type="checkbox">
            Mostrar ubicación aproximada
          </label>
        </div>
        <!-- Añade más campos básicos aquí -->
      </section>
  
      <section>
        <h2>Características básicas</h2>
        <div v-for="feature in basicFeatures" :key="feature">
          <label>
            <input v-model="features[feature]" type="checkbox">
            {{ feature }}
          </label>
        </div>
        <div>
          <label for="bedrooms">Habitaciones:</label>
          <input v-model.number="features.bedrooms" id="bedrooms" type="number">
        </div>
      </section>
  
      <section v-if="property.propertyType === 'Casa en condominio'">
        <h2>Características del condominio</h2>
        <div v-for="feature in condoFeatures" :key="feature">
          <label>
            <input v-model="condo[feature]" type="checkbox">
            {{ feature }}
          </label>
        </div>
      </section>
  
      <section>
        <h2>Información adicional</h2>
        <div>
          <label for="landArea">Superficie de terreno (m²):</label>
          <input v-model.number="property.landArea" id="landArea" type="number">
        </div>
        <div>
          <label for="constructionArea">Superficie de construcción (m²):</label>
          <input v-model.number="property.constructionArea" id="constructionArea" type="number">
        </div>
        <!-- Añade más campos adicionales aquí -->
      </section>
  
      <section>
        <h2>Servicios</h2>
        <div v-for="service in services" :key="service">
          <label>
            <input v-model="propertyServices[service]" type="checkbox">
            {{ service }}
          </label>
        </div>
      </section>
  
      <section>
        <h2>Accesorios</h2>
        <div v-for="accessory in accessories" :key="accessory">
          <label>
            <input v-model="propertyAccessories[accessory]" type="checkbox">
            {{ accessory }}
          </label>
        </div>
      </section>
  
      <section>
        <h2>Servicios cercanos</h2>
        <div>
          <label for="importantRoads">Vialidades importantes:</label>
          <input v-model="nearbyServices.importantRoads" id="importantRoads" type="text">
        </div>
        <div>
          <label for="importantBuildings">Edificios importantes:</label>
          <input v-model="nearbyServices.importantBuildings" id="importantBuildings" type="text">
        </div>
        <div>
          <label for="publicTransport">Rutas de transporte urbano:</label>
          <input v-model="nearbyServices.publicTransportRoutes" id="publicTransport" type="text">
        </div>
      </section>
  
      <button type="submit">Enviar formulario</button>
    </form>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const property = reactive({
    propertyType: '',
    location: '',
    approximateLocation: false,
    landArea: null,
    constructionArea: null,
    // Añade más propiedades según sea necesario
  });
  
  const basicFeatures = ['Estacionamiento', 'Sala', 'Comedor', 'Doble altura', 'Cocina', 'Cuarto para lavado', 'Patio de servicio', 'Sala de T.V.', 'Estudio', 'Bodega', 'Cuarto de servicio', 'Terraza', 'Vestidor', 'Clóset'];
  const features = reactive({
    bedrooms: 0,
    // Inicializa las otras características como false
    ...Object.fromEntries(basicFeatures.map(feature => [feature, false]))
  });
  
  const condoFeatures = ['Caseta de vigilancia', 'Seguridad 24/7', 'Alberca', 'Gimnasio', 'Juegos infantiles', 'Fogateros', 'Asadores', 'Casa club', 'Salón de eventos', 'Terraza', 'Pet garden'];
  const condo = reactive(Object.fromEntries(condoFeatures.map(feature => [feature, false])));
  
  const services = ['Agua', 'Luz', 'Drenaje', 'Calle pavimentada', 'Alumbrado público'];
  const propertyServices = reactive(Object.fromEntries(services.map(service => [service, false])));
  
  const accessories = ['Protecciones', 'Mosquiteros', 'Extractor de olores', 'Aire acondicionado', 'Domos', 'Vitrales', 'Tejaban', 'Pisos laminados', 'Pisos de cerámica', 'Luces LED', 'Alarma de seguridad', 'Puerta de servicio'];
  const propertyAccessories = reactive(Object.fromEntries(accessories.map(accessory => [accessory, false])));
  
  const nearbyServices = reactive({
    importantRoads: '',
    importantBuildings: '',
    publicTransportRoutes: ''
  });
  
  const submitForm = () => {
    // Aquí puedes manejar el envío del formulario
    console.log('Formulario enviado', { property, features, condo, propertyServices, propertyAccessories, nearbyServices });
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  section {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 4px;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input[type="text"],
  input[type="number"],
  select {
    width: 100%;
    padding: 0.5rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>