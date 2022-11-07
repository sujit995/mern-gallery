import React from 'react'

const InputForm = ({ label, type, value, name, onChange }) => {

    return (
        <div className="flex flex-col">
            {label && <label>{label}</label>}
            <input type={type} value={value} name={name} onChange={onChange} className="border border-neutral-200 py-[10px] px-[16px] align-middle justify-items-center rounded" />
        </div>
    )
}

export default InputForm