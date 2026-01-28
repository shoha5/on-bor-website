import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import { Icon } from '@mui/icons-material';

const icons = ['Home', 'Star', 'Favorite', 'Settings', 'Info']; // Example icons

const HeroSection = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center', fontSize: '3rem', margin: '20px 0' }}
            >
                ON-BOR
            </motion.h1>
            <Grid container spacing={2} justifyContent="center">
                {icons.map((iconName, index) => (
                    <Grid item xs={2} key={index}>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Icon>{iconName}</Icon>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default HeroSection;