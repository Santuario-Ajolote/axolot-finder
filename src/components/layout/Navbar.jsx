import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, LogIn, ShieldCheck, ChevronDown, Waves, Leaf } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useLang } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import { t } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';



export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const { user } = useAuth();

  const navLinks = [
    { path: '/science', label: lang === 'es' ? 'Observatorio' : 'Observatory', shortLabel: lang === 'es' ? 'Observatorio' : 'Observatory', icon: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7fd5b087c_Flor1verdenegativo.png' },
    { path: '/acciones-2026', label: 'Acciones 2026', shortLabel: 'Acciones 2026', icon: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/ddbb9330d_Hombreverdenegativo1.png' },
    { path: '/voluntariado', label: lang === 'es' ? 'Voluntariado' : 'Volunteer', shortLabel: 'Voluntariado', icon: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/a7483fcf4_Manoverdepositivo1.png' },
    { path: '/asistente-legal-anp', label: lang === 'es' ? 'Abogado ANP' : 'ANP Lawyer', shortLabel: lang === 'es' ? 'Abogado ANP' : 'ANP Lawyer', icon: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7fd5b087c_Flor1verdenegativo.png' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/f8c0d11d9_Ajoloteverdenegativo1.png"
              alt="AxolotFinder icon"
              className="w-10 h-10 rounded-xl object-cover transition-transform group-hover:scale-105"
            />
            <img
              src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/07d72a11f_Tipografapositivo1.png"
              alt="Santuario Ajolote"
              className="h-14 w-auto object-contain hidden sm:block"
            />
          </Link>

          {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-1">
             {navLinks.map((link, idx) => {
               const greenTones = [
                 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200',
                 'bg-emerald-200 text-emerald-900 hover:bg-emerald-300',
                 'bg-emerald-400 text-emerald-950 hover:bg-emerald-500',
                 'bg-teal-100 text-teal-900 hover:bg-teal-200',
               ];
               return (
               <Link key={link.path} to={link.path}>
                 <Button
                   size="sm"
                   className={`text-sm font-medium shadow-sm ${greenTones[idx]}`}
                 >
                   {link.icon && (
                     <img src={link.icon} alt="" className="w-5 h-5 rounded object-cover" />
                   )}
                   {link.label}
                 </Button>
               </Link>
               );
             })}
             <DropdownMenu>
               <DropdownMenuTrigger asChild>
                 <Button size="sm" className="ml-2 bg-amber-500 text-white hover:bg-amber-600 font-semibold shadow-md ring-2 ring-emerald-600">
                   <img src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/1598b258d_Flor2verdepositivo.png" alt="" className="w-5 h-5 rounded object-cover" />
                   {lang === 'es' ? 'Turismo Responsable' : 'Responsible Tourism'}
                   <ChevronDown className="w-3.5 h-3.5" />
                 </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end" className="w-56">
                 <DropdownMenuItem asChild>
                   <Link to="/turismo-responsable" className="flex items-center gap-2 cursor-pointer">
                     <Leaf className="w-4 h-4 text-emerald-600" />
                     <div className="flex flex-col">
                       <span className="font-medium">{lang === 'es' ? 'Salva al Ajolote' : 'Save the Axolotl'}</span>
                       <span className="text-xs text-muted-foreground">{lang === 'es' ? 'Turismo en Xochimilco' : 'Tourism in Xochimilco'}</span>
                     </div>
                   </Link>
                 </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                   <Link to="/playa" className="flex items-center gap-2 cursor-pointer">
                     <Waves className="w-4 h-4 text-cyan-600" />
                     <div className="flex flex-col">
                       <span className="font-medium">{lang === 'es' ? 'Salva la Playa en Nayarit' : 'Save the Beach in Nayarit'}</span>
                       <span className="text-xs text-muted-foreground">{lang === 'es' ? 'Únete a la Batalla por la Playa' : 'Join the Beach Battle'}</span>
                     </div>
                   </Link>
                 </DropdownMenuItem>
                 </DropdownMenuContent>
                 </DropdownMenu>
                 <Link to="/quienes-somos">
                  <Button size="sm" className="ml-2 bg-emerald-800 text-white hover:bg-emerald-900 font-semibold shadow-md">
                    <img src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/836a3578e_Laptopverdenegativo.png" alt="" className="w-5 h-5 rounded object-cover" />
                    {lang === 'es' ? 'Quiénes Somos' : 'About Us'}
                  </Button>
                </Link>
              {user ? (
                <>
                  <Link to="/profile" className="ml-1">
                    <Button
                      variant={location.pathname === '/profile' ? "secondary" : "ghost"}
                      size="icon"
                      className="rounded-full"
                      title={t(lang, 'nav_my_profile')}
                    >
                      <User className="w-4 h-4" />
                    </Button>
                  </Link>
                </>
              ) : (
                <Button
                  onClick={() => base44.auth.redirectToLogin()}
                  size="sm"
                  className="ml-2 gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  {t(lang, 'nav_login')}
                </Button>
              )}
              </div>

          {/* Mobile menu */}
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link, idx) => {
                    const greenTones = [
                      'bg-emerald-100 text-emerald-900 hover:bg-emerald-200',
                      'bg-emerald-200 text-emerald-900 hover:bg-emerald-300',
                      'bg-emerald-400 text-emerald-950 hover:bg-emerald-500',
                      'bg-teal-100 text-teal-900 hover:bg-teal-200',
                    ];
                    return (
                    <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
                      <Button
                        className={`w-full justify-start text-left leading-tight h-auto py-2.5 shadow-sm ${greenTones[idx]}`}
                      >
                        {link.icon && (
                          <img src={link.icon} alt="" className="w-5 h-5 rounded object-cover" />
                        )}
                        {link.shortLabel || link.label}
                      </Button>
                    </Link>
                    );
                  })}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="w-full flex items-center justify-between bg-amber-500 text-white hover:bg-amber-600 font-semibold shadow-md mt-2 ring-2 ring-emerald-600 rounded-md px-4 py-2 text-sm">
                        <span className="flex items-center gap-2">
                          <img src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/1598b258d_Flor2verdepositivo.png" alt="" className="w-5 h-5 rounded object-cover" />
                          {lang === 'es' ? 'Turismo Responsable' : 'Responsible Tourism'}
                        </span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      <DropdownMenuItem asChild>
                        <Link to="/turismo-responsable" onClick={() => setOpen(false)} className="flex items-center gap-2 cursor-pointer">
                          <Leaf className="w-4 h-4 text-emerald-600" />
                          <div className="flex flex-col">
                            <span className="font-medium">{lang === 'es' ? 'Salva al Ajolote' : 'Save the Axolotl'}</span>
                            <span className="text-xs text-muted-foreground">{lang === 'es' ? 'Turismo en Xochimilco' : 'Tourism in Xochimilco'}</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/playa" onClick={() => setOpen(false)} className="flex items-center gap-2 cursor-pointer">
                          <Waves className="w-4 h-4 text-cyan-600" />
                          <div className="flex flex-col">
                            <span className="font-medium">{lang === 'es' ? 'Salva la Playa en Nayarit' : 'Save the Beach in Nayarit'}</span>
                            <span className="text-xs text-muted-foreground">{lang === 'es' ? 'Únete a la Batalla por la Playa' : 'Join the Beach Battle'}</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                    <Link to="/quienes-somos" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-emerald-800 text-white hover:bg-emerald-900 font-semibold shadow-md mt-2">
                        <img src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/836a3578e_Laptopverdenegativo.png" alt="" className="w-5 h-5 rounded object-cover" />
                        {lang === 'es' ? 'Quiénes Somos' : 'About Us'}
                      </Button>
                    </Link>
                  {user ? (
                    <>
                      <Link to="/profile" onClick={() => setOpen(false)}>
                        <Button variant="outline" className="w-full gap-2 mt-2">
                          <User className="w-4 h-4" />
                          {t(lang, 'nav_my_profile')}
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Button
                      onClick={() => {
                        base44.auth.redirectToLogin();
                        setOpen(false);
                      }}
                      className="w-full gap-2 mt-2"
                    >
                      <LogIn className="w-4 h-4" />
                      {t(lang, 'nav_login')}
                    </Button>
                  )}
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}