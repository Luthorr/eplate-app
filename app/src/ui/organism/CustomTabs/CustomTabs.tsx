import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import classnames from 'classnames';
import styles from './CustomTabs.module.css';

const CustomTabs = () => (
  <div className='pt-2 pb-5'>
    <h4 className='text-center fw-bold text-muted text-uppercase'>
      Miesiąc 2022
    </h4>
    <Tabs className='customTabs' defaultActiveKey='test1'>
      <Tab eventKey='test1' title='NAJLEPSI'>
        <div className={classnames('py-2', styles.platesContainer)}>
          <h3>1. BIA K2910A</h3>
          <h3>2. WA 9W9ZY2</h3>
          <h3>3. SK 82SUB1</h3>
          <h3>4. ZCX W8ZMNZ</h3>
          <h3>5. ZCX W8ZMNZ</h3>
          <h3>6. ZCX W8ZMNZ</h3>
          <h3>7. ZCX W8ZMNZ</h3>
          <h3>8. ZCX W8ZMNZ</h3>
          <h3>9. ZCX W8ZMNZ</h3>
          <h3>10. ZCX W8ZMNZ</h3>
        </div>
      </Tab>
      <Tab eventKey='test2' title='NAJGORSI'>
        <div className={classnames('py-2', styles.platesContainer)}>
          <h3>1. BIA K2910A</h3>
          <h3>2. WA 9W9ZY2</h3>
          <h3>3. SK 82SUB1</h3>
          <h3>4. ZCX W8ZMNZ</h3>
          <h3>5. ZCX W8ZMNZ</h3>
          <h3>6. ZCX W8ZMNZ</h3>
          <h3>7. ZCX W8ZMNZ</h3>
          <h3>8. ZCX W8ZMNZ</h3>
          <h3>9. ZCX W8ZMNZ</h3>
          <h3>10. ZCX W8ZMNZ</h3>
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default CustomTabs;
