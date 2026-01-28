import React from 'react';

const MoatSection: React.FC = () => {
    return (
        <section style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Data Flow from Seller to Buyer</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ animation: 'pulse 2s infinite' }}>Seller</div>
                <div style={{ animation: 'pulse 2s infinite', margin: '10px 0' }}>Data Collection</div>
                <div style={{ animation: 'pulse 2s infinite' }}>Buyer</div>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>100% Data Accuracy</h2>
        </section>
    );
};

export default MoatSection;

// Add CSS for pulsing effect
const styles = document.createElement('style');
styles.innerHTML = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(styles);