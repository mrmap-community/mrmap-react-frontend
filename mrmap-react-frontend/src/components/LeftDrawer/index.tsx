import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import type OlMap from 'ol/Map';
import { default as React, useEffect, useRef, useState } from 'react';
import './index.css';

interface OwnProps {
  map?: OlMap;
  children?: JSX.Element;
}

type LeftDrawerProps = OwnProps;

const width = '500px';

const LeftDrawer: React.FC<LeftDrawerProps> = ({ map, children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // adjust padding of map div
  useEffect(() => {
    if (map) {
      const mapDiv: any = document.querySelector(`#${map.getTarget()}`);
      if (!isVisible) {
        mapDiv.style.paddingLeft = '0';
      } else {
        mapDiv.style.paddingLeft = width;
      }
    }
  }, [map, isVisible]);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
    buttonRef.current?.blur();
  };

  return (
    <>
      <Button
        ref={buttonRef}
        className={'left-drawer-toggle-button'}
        type="primary"
        style={{
          left: isVisible ? width : 0,
        }}
        icon={isVisible ? <LeftOutlined /> : <RightOutlined />}
        onClick={toggleVisible}
      />
      <Drawer
        placement="left"
        getContainer={false}
        visible={isVisible}
        closable={false}
        mask={false}
        width={500}
        style={{ position: 'absolute', zIndex: 1, height: '100%' }}
      >
        {children}
      </Drawer>
    </>
  );
};

export default LeftDrawer;
