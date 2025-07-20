import React, { FC } from 'react';
import { HeadFC, PageProps, Link } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";

interface ForumTutorialStep {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
}

const ForumTutorialPage: FC<PageProps> = () => {
  const forumTutorialSteps: ForumTutorialStep[] = [
    {
      id: 1,
      title: '互动创意工坊',
      description: '看见底部导航栏的「 论坛」了吗？点进去看看又有哪些天赋怪发布他们的好看程序啦！',
    },
    {
      id: 2,
      title: '社区行为准则',
      description: '1. 请保持群内交流的友善氛围，尊重每一位群成员。 2. 遇到技术问题时，请先查看群文件中的常见问题解答。 3. 分享内容时请注意版权，不要发布未经授权的材料。 4. 如有紧急问题，可以@群管理员或项目组成员。 5. 欢迎邀请对项目感兴趣的同学加入群聊。',
      imageSrc: require('../images/inter-logo.png').default
    },
    {
      id: 3,
      title: '账号',
      description: '我们已经为每位同学开通了账号，用户名是你的中文名字，密码是你的身份证后六位，最后一位是X的同学请输入大写X。账号的邮箱是悬置的，不改不影响功能，只是之后忘记了就找不回密码了',
    },
    {
      id: 4,
      title: '使用',
      description: '论坛的使用应当是直观简单的，如果你有志于维护论坛，欢迎你联系我们。',
    },
  ];

  return (
    <Layout>
      <div className="page-content">
        {/* Header Section */}
        <section className="tutorial-header mb-xl">
          <div className="tutorial-nav">
            <Link to="/" className="back-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <h1 className="tutorial-page-title">论坛使用教程</h1>
          </div>
        </section>

        {/* Quick Join Section */}
        <section className="tutorial-steps mb-xl">
          <div className="tutorial-step forum-tutorial-step">
            <div className="step-content">
              <div className="step-text">
                <h2 className="step-title">QQ社群</h2>
                <p className="step-description">
                  哇InterStudio也太棒了吧！好想了解一下~ 点击下方按钮快速加入我们的QQ群，开始你的社区之旅！
                </p>
                <a 
                  href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=nXlZ1Lr48BRY4nQT_9frvHKLgYhErSdr&authKey=sTCP8Vvk1JA2PZmBydlJaULA3Brr2nin6FWEnIDwda%2BzqEVxCywf0oZuoC26Ssel&noverify=0&group_code=815750302" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="forum-join-button"
                >
                  🚀 立即加入QQ群 (815750302)
                </a>
              </div>
              <div className="step-image">
                <img 
                  src={require('../images/isqq.jpg').default} 
                  alt="QQ群二维码"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forum Tutorial Steps Section */}
        <section className="tutorial-steps">
          {forumTutorialSteps.map((step, index) => (
            <div key={step.id} className="tutorial-step forum-tutorial-step">
              <div className="step-content">
                <div className="step-text">
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-description">{step.description}</p>
                </div>
                <div className="step-image">
                  {step.imageSrc ? (
                    <img 
                      src={step.imageSrc} 
                      alt={step.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <div className="placeholder-icon triangle"></div>
                      <div className="placeholder-icon star"></div>
                      <div className="placeholder-icon square"></div>
                    </div>
                  )}
                </div>
              </div>
              {index < forumTutorialSteps.length - 1 && <div className="step-divider"></div>}
            </div>
          ))}
        </section>

        {/* Community Stats Section */}
        <section className="tutorial-steps">
          <div className="tutorial-step forum-tutorial-step">
            <div className="step-content">
              <div className="step-text">
                <h2 className="step-title">社区概况</h2>
                <div className="forum-highlight">
                  <div className="highlight-title">InterStudio 社区</div>
                  <div className="highlight-content">
                    <div className="community-stats">
                      <div className="stat-item">
                        <div className="stat-number members">100+</div>
                        <div className="stat-label">群成员</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number support">3</div>
                        <div className="stat-label">专业分布</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number discussions">180+</div>
                        <div className="stat-label">成立时间</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForumTutorialPage;

export const Head: HeadFC = () => (
  <>
    <title>论坛使用教程 - Pin Campus Book</title>
    <meta name="description" content="Pin Campus Book 论坛使用教程" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
); 