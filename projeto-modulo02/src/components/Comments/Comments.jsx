import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { StyledCommentsCard, StyledCommentsForm, StyledCommentsH1, StyledCommentsInfoCard, StyledCommentsInput, StyledCommentsInputsCard, StyledCommentsTextarea, StyledCommentsBtn, StyledCommentsWarning } from './styles/StyledComments';


export default function Comments(props) {

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: '',
            comment: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().email("Invalid email format").required("Email é obrigatório"),
            comment: Yup.string().max(200, "max 200 Characters").required('Comentário é obrigatório')
        }),
        onSubmit: ({ name, email, comment }) => {
            props.saver(props.id, name, email, comment)
           
        }
    })


    return (
        <StyledCommentsCard>
            <StyledCommentsH1>Comentários</StyledCommentsH1>
            <StyledCommentsForm onSubmit={handleSubmit}>
                <StyledCommentsInputsCard >
                    <StyledCommentsInfoCard>
                        <StyledCommentsInput onBlur={handleBlur} onChange={handleChange} value={values.name} name="name" placeholder="Nome" type="text" />

                        <StyledCommentsInput onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" placeholder="Email" type="text" />

                    </StyledCommentsInfoCard>
                    <StyledCommentsInfoCard>
                        <StyledCommentsTextarea onBlur={handleBlur} onChange={handleChange} value={values.comment} name="comment" placeholder="Escreva seu comentário..." type="text" />
                    </StyledCommentsInfoCard>


                </StyledCommentsInputsCard>
                <StyledCommentsInfoCard>
                    {touched.name && errors.name ? (<StyledCommentsWarning>{errors.name}</StyledCommentsWarning>) : null}
                    {touched.email && errors.email ? (<StyledCommentsWarning>{errors.email}</StyledCommentsWarning>) : null}
                    {touched.comment && errors.comment ? (<StyledCommentsWarning>{errors.comment}</StyledCommentsWarning>) : null}
                </StyledCommentsInfoCard>
                <StyledCommentsBtn type="submit">Comentar</StyledCommentsBtn>
            </StyledCommentsForm>
        </StyledCommentsCard>
    )
}
