import { yupResolver } from '@hookform/resolvers/yup';
import { set, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



import { api } from '../../services/api';
import Logo from '../../assets/logo2.svg'
import { Button } from '../../components/Button'


import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";



export function Register() {

    const navigate = useNavigate()

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup.string().email('Digite um email válido').required(' O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Confirme sua senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })



    const onSubmit = async (data) => {

        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
            }, {
                validateStatus: () => true
            });

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
                toast.success('Usuário criado com sucesso');
            } else if (status === 409) {
                toast.error('Email já cadastrado');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('Erro ao criar a conta');
        }
    }




    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Title>Crie sua conta</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register('name')} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register('confirmPassword')} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar Conta</Button>

                    <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p>
                </Form>
            </RightContainer>

        </Container>

    )
}