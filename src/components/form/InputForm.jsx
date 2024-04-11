import '../styles/InputForm.css'

export const InputForm = ({label, type, name, value, onChange, placeholder}) => {
    return (
        <div className="container-input">
            <label className='label-formulario'>{label}</label>
            <input 
            className='input-formulario' 
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            />
        </div>
    )
}