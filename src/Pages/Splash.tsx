import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Splash() {

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => navigate('/onboarding', { replace: true}), 2700)
        return () => clearTimeout(timer)
    }, [navigate])

  return (
    <div className="flex min-h-screen flex-col items-center bg-navy">
        <div className="flex flex-1 flex-col items-center justify-center">
            <img src="/logo-splash.png" alt="FIND" className="w-52" />
            <p className="mt-6 flex items-center whitespace-nowrap text-[11px] font-medium tracking-[0.3em] text-white">
                {['TROUVEZ', 'COMPAREZ', 'ÉCONOMISEZ'].map((mot) => (
                    <span key={mot} className="flex items-center">
                        {mot}
                        <span className="mx-1.5 h-2 w-2 rounded-full bg-brand" />
                    </span>
                ))}
            </p>
        </div>
        <div className="mb-24 h-1.5 w-3/4 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-slate-200 animate-[load_2.2s_ease-out_forwards]" >
                
            </div>
        </div>
    </div>
  )
}
