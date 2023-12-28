export default function InputNewAction({ inputValue, handleInputChange }) {
    return (
        <input 
            placeholder='Type in a new action'
            value={inputValue} 
            onChange={handleInputChange}>
        </input>
    )
}
