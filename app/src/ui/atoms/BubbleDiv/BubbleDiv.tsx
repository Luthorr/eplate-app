import React from 'react';
import { BubbleDivProps } from './BubbleDiv.types';
import styles from './BubbleDiv.module.css';

const BubbleDiv = ({ children }: BubbleDivProps) => (
  <div className={styles.bubbleDiv}>{children}</div>
);

export default BubbleDiv;
