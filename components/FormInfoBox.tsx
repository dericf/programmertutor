import CloseOutlined from '@material-ui/icons/CloseOutlined';

export const FormInfoBox = ({ children, onClose }) => {
  return (
    <div className="w-full flex prose my-6 p-4 bg-white text-gray-900 border-2 border-gray-200 max-h-128 overflow-y-scroll relative">
      <CloseOutlined
        className="sticky top-2 right-2 cursor-pointer"
        onClick={onClose}
      />
      {children}
    </div>
  );
};
