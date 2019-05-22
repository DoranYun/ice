import React from 'react';
import { Grid } from '@alifd/next';
import PropTypes from 'prop-types';
import ScaffoldCard from '@components/ScaffoldCard';
import MaterialCategories from '@components/MaterialCategories';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const ScaffoldPanel = ({ dataSource, current }) => {
  const { categories, materials } = dataSource;
  const currMaterials = materials[current] || [];

  return (
    <div className={styles.materialsPanel}>
      <MaterialCategories dataSource={categories} current={current} />
      <Row wrap gutter="40">
        {currMaterials.map((data) => {
          const key = data.source && data.source.npm ? data.source.npm : data.title;

          return (
            <Col l="12" s="12" xs="24" xxs="24" key={key}>
              <ScaffoldCard dataSource={data} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

ScaffoldPanel.defaultProps = {
  dataSource: {
    categories: [],
    materials: {},
  },
  current: 'all',
};

ScaffoldPanel.propTypes = {
  dataSource: PropTypes.shape({
    categories: PropTypes.array.isRequired,
    materials: PropTypes.object.isRequired,
  }),
  current: PropTypes.string,
};

export default ScaffoldPanel;
