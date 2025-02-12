import { ConfigProvider, Flex, Layout, Segmented, Tag, theme } from 'antd';
import { FC, PropsWithChildren, ReactNode, use, useState } from 'react';
import wukong from './assets/game.webp';
import minecraft from './assets/game.jpg';
import './App.css';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

const App = () => {
  const [TagLayout, setTagLayout] = useState<MyTagProps['TagLayout']>('Horizontal');
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout className="Layouts">
        <a>标签布局方式</a>
        <Segmented
          shape="round"
          value={TagLayout}
          onChange={setTagLayout}
          options={[
            { value: 'List', icon: <AppstoreOutlined /> },
            { value: 'Horizontal', icon: <BarsOutlined /> },
          ]}
        />
        <div className="cover">
          <img alt="game" src={wukong} />
          <Tags
            style={{
              position: 'absolute',
              bottom: 15,
              right: 15,
            }}
            TagLayout={TagLayout}
            bordered={false}
            color="orange"
            subtitle="送豪礼">
            预购
          </Tags>
        </div>
        <div className="cover">
          <img alt="game" src={minecraft} />
          <Tags
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
            }}
            TagLayout={TagLayout}
            bordered={false}
            color="green"
            subtitle="¥288">
            预购
          </Tags>
        </div>
        <Tags
          bordered={false}
          color="green">
          预购
        </Tags>
      </Layout>
    </ConfigProvider>
  );
}

// 继承 antd 的 TagProps，并支持 children
interface MyTagProps extends PropsWithChildren, React.ComponentProps<typeof Tag> {
  subtitle?: ReactNode
  TagLayout?: 'List' | 'Horizontal'
}

const Tags: FC<MyTagProps> = (props) => (
  <Flex
    className="tags"
    style={props.style}
    vertical={props.TagLayout === 'List'}
  >
    <Tag
      className='tagt'
      {...props}
      style={{
        marginInlineEnd: 0,
        alignItems: 'center',
        textAlign: 'center',
        padding:4
      }} //不再继承style
    >{props.children}</Tag>
    {props.subtitle
      &&
      <span
        style={{
          color: 'white',
          padding:4,
        }}>
        {props.subtitle}
      </span>
    }
  </Flex >
);

export default App;
