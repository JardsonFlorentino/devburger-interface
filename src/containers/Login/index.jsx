import { yupResolver } from '@hookform/resolvers/yup';
import { set, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';



import { api } from '../../services/api';
import Logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'


import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";



export function Login() {

    const navigate = useNavigate()
    const { putUserData } = useUser()


    const schema = yup
        .object({
            email: yup.string().email('Digite um email válido').required(' O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
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
        const { data: userData } = await toast.promise(
            api.post('/sessions', {
                email: data.email,
                password: data.password
            }),

            {
                pending: 'Verificando credenciais...',
                success: {
                    render() {
                        setTimeout(() => {
                            if (userData?.admin) {
                                navigate('/admin/pedidos')
                            } else {
                                navigate('/')
                            }

                        }, 2000)
                        return 'Login realizado com sucesso 👌'
                    }
                },
                error: 'Email ou senha inválidos 🤯',
            }
        )

        putUserData(userData)
    }


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
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

                    <Button type="submit">Entrar</Button>

                    <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
                </Form>
            </RightContainer>

        </Container>

    )
}