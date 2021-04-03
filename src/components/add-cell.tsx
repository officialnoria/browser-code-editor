import './add-cell.css';
import { useActions } from '../hooks/use-actions';
import { Fragment } from 'react';

interface AddCellProps {
  previousCellID: string | null;
}

const CellButton = ({ text }: { text: string }) => (
  <Fragment>
    <span className="icon is-small">
      <i className="fas fa-plus" />
    </span>
    <span>{text}</span>
  </Fragment>
);

const AddCell: React.FC<AddCellProps> = ({ previousCellID }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`add-cell ${previousCellID === null && 'is-visible'}`}>
      <div className="add-buttons">
        <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(previousCellID, 'code')}>
          <CellButton text="Code" />
        </button>
        <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(previousCellID, 'text')}>
          <CellButton text="Text" />
        </button>
      </div>
      <div className="divider" />
    </div>
  );
};

export default AddCell;
