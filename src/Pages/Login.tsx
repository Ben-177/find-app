import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff } from 'lucide-react'

const champ = 'w-full rounded-xl bg-white px-5 py-4 text-base font-semibold placeholder:text-slate-500 shadow-sm'

export default function Login() {
    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')
    const [visible, setVisible] = useState(false)
    const [erreur, setErreur] = useState('')
    const navigate = useNavigate()

    const envoyer = (e: FormEvent) => {
        e.preventDefault()
        if (!email.includes('@') || mdp.length < 6) {
            setErreur('E-mail invalide ou mot de passe trop court (6 caractères minimum).')
            return
        }
        setErreur('')
        navigate('/home')
    }

  return (
    <div className="min-h-screen bg-canvas px-6 pt-24">
        <h1 className="text-center text-3xl font-bold text-navy">Connexion</h1>
        <p className="mb-12 mt-6 text-center text-xl font-semibold text-slate-500">Bienvenue sur FIND</p>
      
        <form onSubmit={envoyer} noValidate>
             <input className={`${champ} mb-4`} type="email" placeholder="Email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
             <div className="relative mb-3">
                <input className={`${champ} pr-14`} type={visible ? 'text' : 'password'} placeholder="Mot de passe" aria-label="Mot de passe" value={mdp} onChange={(e) => setMdp(e.target.value)} />
                <button type="button" aria-label="Afficher ou masquer le mot de passe" onClick={() => setVisible(!visible)} className="absolute right-4 top-1/2 -translate-y-1/2 text-navy">
                    {visible ? <Eye size={24} /> : <EyeOff size={24} />}
                </button>
             </div>
             <div className="mb-8 text-right">
                <button type="button" className="font-bold text-link">Mot de passe oublié ?</button>
             </div>
             {erreur && <p role="alert" className="mb-4 text-sm font-semibold text-red-600">{erreur}</p>}
             <button type="submit" className="w-full rounded-xl bg-navy-btn py-4 text-lg font-bold text-white">Se connecter</button>
        </form>

        <p className="mb-4 mt-8 text-center font-bold text-navy">Ou connecter avec :</p>
        <div className="flex gap-4">
            <button type="button" className="flex flex-1 items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white py-2.5 font-bold">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" fill="#1877F2" /><path d="M13.5 19v-6h2l.4-2.5h-2.4V9c0-.7.3-1.2 1.3-1.2h1.2V5.6c-.2 0-1-.1-1.8-.1-1.9 0-3.1 1.1-3.1 3.2v1.8H9v2.5h2.1v6z" fill="#fff" /></svg>
                Facebook
            </button>
            <button type="button" className="flex flex-1 items-center judtify-center gap-3 rounded-full border-2 border-slate-200 bg-white py-2.5 font-bold">
                <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z " /><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6z" /><path fill="#FBBC05" d="MA0.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" /><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9;8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" /></svg>
                Google
            </button>
        </div>

        <p className="mt-8 text-center">
            <Link to="/register" className="text-lg font-bold text-link">Créer un compte</Link>
        </p>
    </div>
    )
    
}
