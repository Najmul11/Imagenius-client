import "./Pagination.css";
import ResponsivePagination from "react-responsive-pagination";

type IProps = {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, handlePageChange }: IProps) => {
  return (
    <ResponsivePagination
      total={totalPages}
      current={currentPage}
      onPageChange={(page) => handlePageChange(page)}
    />
  );
};

export default Pagination;
