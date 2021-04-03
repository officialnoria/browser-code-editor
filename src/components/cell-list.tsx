import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import AddCell from './add-cell';
import CellListItem from './cell-list-item';

interface CellListProps {}

const CellList: React.FC<CellListProps> = () => {
  const cells = useTypedSelector(({ cells }) => cells?.order.map((id) => cells.data[id]));

  const renderedCells =
    cells &&
    cells.map((cell) => (
      <Fragment key={cell.id}>
        <CellListItem cell={cell} />
        <AddCell previousCellID={cell.id} />
      </Fragment>
    ));
  return (
    <div>
      <AddCell previousCellID={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
