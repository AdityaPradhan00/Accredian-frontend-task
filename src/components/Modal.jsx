import React from 'react';
import { Modal, Button, TextField, Box, Typography, Select, MenuItem } from '@mui/material';

const ReferNowModal = ({ open, handleClose, handleSubmit }) => {
    const [formData, setFormData] = React.useState({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
        courseInterested: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData); 
        // Add form validation and submission logic here
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box 
                p={4} 
                bgcolor="white" 
                maxWidth={500} 
                borderRadius={5} 
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6" gutterBottom>Refer a Friend</Typography>
                <form onSubmit={onSubmit} style={{ width: '100%' }}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Your Name"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Your Email"
                        name="referrerEmail"
                        type="email"
                        value={formData.referrerEmail}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Referee Full Name"
                        name="refereeName"
                        value={formData.refereeName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Referee Email"
                        name="refereeEmail"
                        type="email"
                        value={formData.refereeEmail}
                        onChange={handleChange}
                        required
                    />
                    <Select required style={{width: '100%', marginTop: '15px', marginBottom: '5px'}} name="courseInterested" value={formData.courseInterested} variant="outlined" onChange={handleChange} displayEmpty>
                        <MenuItem value="" disabled>Course Interested In</MenuItem>
                        <MenuItem value="Professional Certificate Program in Product Management">Professional Certificate Program in Product Management</MenuItem>
                        <MenuItem value="PG Certificate Program in Strategic Product Management">PG Certificate Program in Strategic Product Management</MenuItem>
                        <MenuItem value="Executive Program in Data Driven Product Management">Executive Program in Data Driven Product Management</MenuItem>
                        <MenuItem value="Executive Program in Product Management and Digital Transformation">Executive Program in Product Management and Digital Transformation</MenuItem>
                        <MenuItem value="Executive Program in Product Management">Executive Program in Product Management</MenuItem>
                        <MenuItem value="Professional Certificate Program in Product Management">Professional Certificate Program in Product Management</MenuItem>
                        <MenuItem value="PG Certificate Program in Strategic Product Management">PG Certificate Program in Strategic Product Management</MenuItem>
                        <MenuItem value="Executive Program in Data Driven Product Management">Executive Program in Data Driven Product Management</MenuItem>
                        <MenuItem value="Executive Program in Product Management and Digital Transformation">Executive Program in Product Management and Digital Transformation</MenuItem>
                        <MenuItem value="Executive Program in Product Management">Executive Program in Product Management</MenuItem>
                    </Select>    
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Message(optional)"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Box mt={2} display="flex" justifyContent="space-between" width="100%">
                        <Button onClick={handleClose} variant="outlined" color='error'>Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default ReferNowModal;