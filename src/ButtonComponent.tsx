
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
  
  function Button(props: ButtonProps) {
    const { label, onClick, disabled } = props;
    
    return ( <button onClick={onClick} disabled={disabled}> 
    {label}
    </button>
      );
    }
    
    export default Button;