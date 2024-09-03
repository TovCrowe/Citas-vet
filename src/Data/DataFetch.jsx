import axios from 'axios';

const API_URL = "http://localhost:8082/patients"; // Your backend URL

// Fetch all patients
const fetchPatients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
};

// Create a new patient
const createPatient = async (patientData) => {
  try {
    console.log(patientData)
    const response = await axios.post(API_URL, patientData);
    return response.data;
  } catch (error) {
    console.error("Error creating patient:", error);
    throw error;
  }
};

// Update an existing patient
const updatePatient = async (patientId, patientData) => {
  try {
    const response = await axios.put(`${API_URL}/${patientId}`, patientData);
    return response.data;
  } catch (error) {
    console.error("Error updating patient:", error);
    throw error;
  }
};

// Delete a patient
const deletePatient = async (patientId) => {
  try {
    await axios.delete(`${API_URL}/${patientId}`);
  } catch (error) {
    console.error("Error deleting patient:", error);
    throw error;
  }
};

export { fetchPatients, createPatient, updatePatient, deletePatient };
