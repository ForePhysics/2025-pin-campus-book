import React, { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";


// 导入自定义组件
import Layout from '../components/Layout'; // 页面整体布局组件
import Banner from '../components/Banner'; // 顶部横幅组件
import SectionHeader from '../components/SectionHeader'; // 各个内容区域的标题组件
import TutorialItem from '../components/TutorialItem'; // 教程列表项组件
import ProcessItem from '../components/ProcessItem'; // 制作过程列表项组件
import MemberItem from '../components/MemberItem'; // 项目成员列表项组件

interface Tutorial {
  title: string;
  description: string;
  linkTo?: string;
}

interface Member1 {
  name: string;
  avatar?: string;
  imageSrc?: string;
}

interface Member2 {
  name: string;
  avatar?: string;
  imageSrc?: string;
}

const IndexPage: FC<PageProps> = () => {
  const tutorials: Tutorial[] = [
    {
      title: '使用教程',
      description: '如何从零上手 Pin Campus Book',
      linkTo: '/tutorial'
    },
    {
      title: '注意事项',
      description: '使用前必须知道的一些小事',
      linkTo: '/precautions'
    }
  ];

  // 按部门分组的成员数据
  const membersByDepartment = {
    '管理部': ['笛韵扬', '钟奕珈' ],
    '设计部': ['周子涵', '笛韵扬', '齐一舟'],
    '硬件部': ['王子琪', '汤恭恪', '笛韵扬' ],
    '软件部': ['陈怡冰', '刘翼飞', '王子琪', '笛韵扬' ],
    "组装部": [  '笛韵扬' , '陈怡冰',  '齐一舟', '周子涵', '刘翼飞',  '张雅捷', '张天祺'],
    "支撑人员": ['张雅捷',  '林弘扬', '刘禹彤',  '钟阅旸', '吴瑜青', '刘翼飞', '戴梦瑶', '笛韵扬']

  };


  const StaticImageByName = ({ name }: { name: string }) => {
    switch (name) {
       case '笛韵扬':
        return <StaticImage src="../images/dyy.png" alt="笛韵扬" width={65} height={65} layout="fixed" placeholder="none" />;
      case '周子涵':
        return <StaticImage src="../images/zzh.png" alt="周子涵" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '齐一舟':
        return <StaticImage src="../images/qyz.jpg" alt="齐一舟" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '钟奕珈':
        return <StaticImage src="../images/zyj.png" alt="钟奕珈" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '钟阅旸':
        return <StaticImage src="../images/zyy.png" alt="钟阅旸" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '陈怡冰':
        return <StaticImage src="../images/cyb.png" alt="陈怡冰" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '汤恭恪':
        return <StaticImage src="../images/tgk.png" alt="汤恭恪" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '王子琪':
        return <StaticImage src="../images/wzq.png" alt="王子琪" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '刘禹彤':
        return <StaticImage src="../images/lyt.jpg" alt="刘禹彤" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '吴瑜青':
        return <StaticImage src="../images/wyq.jpg" alt="吴瑜青" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '刘翼飞':
        return <StaticImage src="../images/lyf.jpg" alt="刘翼飞" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '戴梦瑶':
        return <StaticImage src="../images/dmy.png" alt="戴梦瑶" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '张天祺':
        return <StaticImage src="../images/ztq.jpg" alt="张天祺" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '张雅捷':
        return <StaticImage src="../images/zyj2.jpg" alt="张雅捷" width={65} height={65} layout="fixed" placeholder="none"/>;
      case '林弘扬':
        return <StaticImage src="../images/lhy.jpg" alt="林弘扬" width={65} height={65} layout="fixed" placeholder="none"/>;
      default:
        return <></>;
    }
  };

  return (
    <Layout>
      <div className="page-content">
        {/* Banner Section */}
        <section className="banner-section mb-2xl">
          <Banner />
        </section>

        {/* Tutorial Section */}
        <section className="tutorial-section mb-2xl">
          <SectionHeader title="教程" showArrow={true} />
          <div className="tutorial-list">
            {tutorials.map((tutorial, index) => (
              <TutorialItem
                key={index}
                title={tutorial.title}
                description={tutorial.description}
                linkTo={tutorial.linkTo}
              />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section mb-2xl">
          <SectionHeader title="制作过程" showArrow={true} />
          <div className="process-grid grid grid-3">
          <ProcessItem imageSrc={<StaticImage src="../images/process-image1.jpg" alt="process-image1" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image2.jpg" alt="process-image2" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image3.jpg" alt="process-image3" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image4.jpg" alt="process-image4" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image5.jpg" alt="process-image5" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image6.jpg" alt="process-image6" />} />

          </div>
        </section>

        {/* Members Section */}
        <section className="members-section mb-2xl">
          <SectionHeader title="项目成员" showArrow={true} />
          {Object.entries(membersByDepartment).map(([department, members]) => (
            <div key={department} style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#333',
                borderBottom: '2px solid #007bff',
                paddingBottom: '0.5rem'
              }}>
                {department}
              </h3>
              <div className="members-list">
                {members.map((memberName, index) => (
                  <MemberItem 
                    key={`${department}-${index}`} 
                    name={memberName} 
                    avatar="" 
                    imageSrc={<StaticImageByName name={memberName} />}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Pin Campus Book</title>
    <meta name="description" content="上科大2025届新生纪念可交互礼物" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);
