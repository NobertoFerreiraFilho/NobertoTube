import React, { useState } from "react";

// Whiteboarding
// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default useForm;