import React, { FC, useState } from 'react';

interface MemberItemProps {
  name: string;
  avatar?: string;
  imageSrc: JSX.Element;
}

// 成员简介数据
const memberDescriptions: { [key: string]: string } = {
  '笛韵扬': '项目发起人，总负责人',
  '周子涵': '总设计师。实施了原型设计，亚克力打样，板层装配。',
  '齐一舟': '',
  '钟奕珈': '实施了和招生办的对接。',
  '钟阅旸': '',
  '陈怡冰': '总开发工程师。实施了esp32嵌入式的开发，网站首页的开发，模块装配，板层装配，质量检测。',
  '汤恭恪': '电子设计工程师。实施了PCB电路的设计，焊接，测试，嵌入式开发。',
  '王子琪': '电子设计工程师，实施了PCB电路的设计，焊接，测试，网站部署。',
  '刘禹彤': '',
  '吴瑜青': '交互设计师，专注于用户体验和界面交互设计。',
  '刘翼飞': '软件技术顾问，工业工程顾问，开发工程师。实施了奥乐齐的采购，esp32嵌入式辅助开发，模块装配，板层装配，质量检测，网站开发部署。',
  '戴梦瑶': '',
  '张天祺': '实施了模块装配',
  '张雅捷': '实施了模块装配',
  '林弘扬': ''
};

// 成员身份数据
const memberIdentities: { [key: string]: string } = {
  '笛韵扬': '2020级信院本科生，2024级信院硕士生',
  '周子涵': '2023级创艺本科生',
  '齐一舟': '2023级创艺本科生',
  '钟奕珈': '',
  '钟阅旸': '',
  '陈怡冰': '2024级信院本科生',
  '汤恭恪': '2024级信院本科生',
  '王子琪': '2021级信院本科生',
  '刘禹彤': '2021级创艺本科生',
  '吴瑜青': '2021级创艺本科生',
  '刘翼飞': '2020级信院本科生，2024级信院博士生',
  '戴梦瑶': '2024级信院本科生',
  '张天祺': '2024级信院本科生',
  '张雅捷': '2024级信院本科生',
  '林弘扬': '2020级信院本科生，2024级信院博士生'
};



const MemberItem: FC<MemberItemProps> = ({ name, avatar, imageSrc }) => {
  const [showModal, setShowModal] = useState(false);
  
  // 优先使用 imageSrc，如果没有则使用 avatar
  const imageSource = imageSrc || avatar;
  
  const handleAvatarClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const description = memberDescriptions[name] || '暂无简介';
  const identity = memberIdentities[name] || '';
  
  return (
    <>
      <div className="member-item">
        <div 
          className="member-avatar placeholder placeholder-circle"
          onClick={handleAvatarClick}
          style={{ cursor: 'pointer' }}
        >
          {imageSource ? (
             imageSrc
          ) : (
            <div className="image-placeholder">
            <div className="placeholder-icon"></div>
          </div>
         )}
        </div>
        <p className="member-name text-sm text-center">{name}</p>
      </div>

      {/* 模态框 */}
      {showModal && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000
          }}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              maxWidth: '400px',
              width: '90%',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
            }}
          >
            <div 
              className="modal-avatar"
              style={{
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {imageSource}
            </div>
            <h3 
              className="modal-name"
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '12px',
                color: '#333'
              }}
            >
              {name}
            </h3>
            {identity && (
              <p 
                className="modal-identity"
                style={{
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '12px',
                  marginTop: '0'
                }}
              >
                {identity}
              </p>
            )}
           
            <p 
              className="modal-description"
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#666',
                margin: 0
              }}
            >
              {description}
            </p>
            <button
              onClick={closeModal}
              style={{
                marginTop: '20px',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberItem;
