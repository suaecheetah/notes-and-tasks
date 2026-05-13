import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './SettingsModal.css';

const PRESETS = [
  { name: 'Cobalt', hue: 220 },
  { name: 'Mint', hue: 150 },
  { name: 'Coral', hue: 15 },
  { name: 'Sunflower', hue: 85 },
  { name: 'Amethyst', hue: 280 }
];

export default function SettingsModal({ isOpen, onClose, hue, setHue }) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="settings-backdrop" onClick={onClose}>
      <div className="settings-modal" onClick={e => e.stopPropagation()}>
        <div className="settings-header">
          <h2>Settings</h2>
          <button className="settings-close-btn" onClick={onClose} aria-label="Close settings">
            <X size={24} />
          </button>
        </div>
        
        <div className="settings-content">
          <div className="settings-section">
            <label className="settings-label">Theme Accent Color</label>
            
            <div className="settings-presets">
              {PRESETS.map(preset => (
                <button
                  key={preset.name}
                  className={`preset-btn ${hue === preset.hue ? 'active' : ''}`}
                  style={{ '--preset-hue': preset.hue }}
                  onClick={() => setHue(preset.hue)}
                  aria-label={`Set theme to ${preset.name}`}
                  title={preset.name}
                />
              ))}
            </div>

            <div className="hue-slider-container">
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(parseInt(e.target.value, 10))}
                className="hue-slider"
                aria-label="Custom hue adjustment"
              />
            </div>
            <p className="settings-hint">
              Changes the primary accent color across the entire application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
