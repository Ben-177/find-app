import { useState } from "react"
import { useNavigate } from "react-router-dom"

const slides = [
    { img: '/onboarding-1.png', titre: 'Trouver rapidement', texte: 'Recherchez commerces, artisants, biens et services autour de vous...' },
    { img: '/onboarding-2.png', titre: 'Localiser facilement', texte: 'Découvrez tout ce qui existe près de vous, directement sur la carte...' },
    { img: '/onboarding-3.png', titre: 'Réserver instantanément', texte: 'Réservez et payez en toute sécurité depuis FIND' },
]

export default function Onboarding() {
    const [i, setI] = useState(0)
    const navigate = useNavigate()
    const slide = slides[i]
    const dernier = i === slides.length - 1

  return (
    <div className="flex min-h-screen flex-col bg-canvas px-6 pb-10 pt-10">
      <div className="flex h-[45vh] items-center justify-center">
        <img src={slide.img} alt="" className="max-h-full w-full object-contain" />
      </div>
      <h1 className="mt-4 text-center text-2xl font-bold text-navy">{slide.titre}</h1>
      <p className="mx-auto mt-6 max-w-xs text-center text-lg font-semibold leading-snug text-navy">{slide.texte}</p>
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => (dernier ? navigate('/login') : setI(i + 1))}
          className="rounded-2xl bg-navy-btn px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-navy-btn/80"
        >
          {dernier ? 'Commencer' : 'Suivant'}
        </button>
      </div>
        <div className="mt-auto flex items-center gap-2 pt-8">
            {slides.map((_, k) => (
                <button
                    key={k}
                    aria-label={`Page ${k + 1}`}
                    onClick={() => setI(k)}
                    className={`rounded-full bg-navy-btn transition-all ${i === k ? 'h-4 w-4' : 'h-2.5 w-2.5'}`}
                />
            ))}
        </div>    
    </div>
  )
}
