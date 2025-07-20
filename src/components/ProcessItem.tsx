import React, { FC } from 'react';

interface ProcessItemProps {
    imageSrc: JSX.Element;
    caption?: string;
}

const ProcessItem: FC<ProcessItemProps> = ({ imageSrc, caption }) => {
  return (
    <div className="process-item card">
      <div className="process-content">
        <div className="process-images">
          <div className="banner-image">
            {imageSrc ? (
               imageSrc
            ) : (
              <div className="image-placeholder">
                <div className="placeholder-icon"></div>
              </div>
            )}
          </div>
        </div>
        {caption && (
          <div 
            className="process-caption"
            style={{
              padding: '12px 16px',
              fontSize: '14px',
              color: '#666',
              textAlign: 'center',
              lineHeight: '1.5',
              marginTop: '8px'
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessItem;