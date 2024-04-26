import React, { useState } from 'react';
import { TextField, Button, Box, Container, Dialog, DialogTitle } from '@mui/material';
import '@mui/icons-material';
import 'tailwindcss/tailwind.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here if needed
    // Instead of direct submission, open the modal
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box className="p-4" boxShadow={3} borderRadius={4}>
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              multiline
              rows={4}
            />
          </Box>
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
        </form>

        {/* Modal that appears on form submission */}
        <Dialog open={isModalOpen} onClose={handleModalClose}>
          <DialogTitle>Form Submitted</DialogTitle>
          <Box p={2}>
            <p className='pb-6'>Thank you for contacting me! Your message has been submitted.</p>
            <Button variant="contained" color="primary" onClick={handleModalClose}>
              Close
            </Button>
          </Box>
        </Dialog>
      </Box>
    </Container>
  );
};

export default ContactForm;
