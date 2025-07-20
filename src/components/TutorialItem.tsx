import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

interface TutorialItemProps {
  title: string;
  description: string;
  linkTo?: string;
}

const TutorialItem: FC<TutorialItemProps> = ({ title, description, linkTo }) => {
  const renderImage = () => {
    switch (title) {
      case '使用教程':
        return (
          <StaticImage
            className='tutorial-img'
            src="../images/tutorial-guide.jpg"
            alt="使用教程"
            layout="fixed"
            placeholder="none"
          />
        );
      case '论坛使用教程':
        return (
          <StaticImage
            className='tutorial-img'
            src="../images/inter-logo.png"
            alt="论坛使用教程"
            layout="fixed"
            placeholder="none"
          />
        );
      case '注意事项':
        return (
          <StaticImage
            className='tutorial-img'
            src="../images/tutorial-precaution.jpg"
            alt="注意事项"
            layout="fixed"
            placeholder="none"

          />
        );
      // 默认情况（可选）
      default:
        return null; // 或返回一个默认图片
    }
  };

  const content = (
    <div className="tutorial-item card">
      <div className="tutorial-content">
        <div className="tutorial-icon">
          {renderImage()}
        </div>
        <div className="tutorial-info">
          <p className="tutorial-title">{title}</p>
          <p className="tutorial-description text-light">{description}</p>
          <div className="tutorial-meta text-sm text-light">
            {/* 可加时间或作者等 */}
          </div>
        </div>
        <div className="tutorial-play">
          {linkTo && (
            <div className="arrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // 如果有链接，用 Gatsby 的 Link 包裹
  if (linkTo) {
    return <Link to={linkTo} className="tutorial-item-link">{content}</Link>;
  }

  return content;
};

export default TutorialItem;