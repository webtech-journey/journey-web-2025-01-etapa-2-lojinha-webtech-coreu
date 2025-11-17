"use client";
import {MapPin, Globe} from 'phosphor-react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faDiscord, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="text-white py-12 w-full bg-[var(--footer-bg)]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start px-6 sm:px-12 lg:px-20 xl:px-28 gap-8 md:gap-12">
        <div className="flex-1 md:w-1/3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <img src="/images/webtech-footer.png" alt="WebTech" className="h-6 w-6" />
            <h2 className="text-xl font-semibold font-[var(--font-montserrat)]">Webtech Network</h2>
          </div>
          <p className="leading-relaxed font-medium text-sm">
            A WebTech é um projeto de extensão da PUC Minas que tem como objetivo gerar espaço de trabalho para que alunos e professores criem juntos aplicações, ferramentas e conteúdo para interessados em criar soluções e produtos digitais.
          </p>
        </div>
        
        <div className="flex-1 md:w-1/3 text-center md:text-left w-full">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <MapPin size={24} weight="fill" />
            <h3 className="text-xl font-semibold">Unidades</h3>
          </div>
          <div className="space-y-4 w-full flex flex-col items-center md:items-start">
            <div className="w-full max-w-xs">
              <p className="font-semibold text-sm">Coreu</p>
              <p className="text-xs font-semibold text-[#D1D5DC]">
                PUC Minas - Coração Eucarístico<br />
                Av. Dom José Gaspar, 500 - Coração Eucarístico<br />
                Prédio 34 - HackerSpace
              </p>
            </div>
            <div className="w-full max-w-xs">
              <p className="font-semibold text-sm">Lourdes</p>
              <p className="text-xs font-semibold text-[#D1D5DC]">
                PUC Minas - Unidade Lourdes<br />
                R. Cláudio Manoel, 1162 - Savassi<br />
                Prédio 4 - Sala 1106
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 md:w-1/3 text-center md:text-left w-full">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <Globe size={24} />
            <h3 className="text-xl font-semibold">Acompanhe-nos!</h3>
          </div>
          
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="https://www.linkedin.com/company/webtech-network/posts/?feedView=all" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </a>
              <a href="https://github.com/webtech-network" aria-label="GitHub" className="hover:opacity-80 transition-opacity">
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </a>
              <a href="https://www.instagram.com/webtech.network/" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </a>
              <a href="https://www.youtube.com/channel/UCvcjBDrFKF_p8rNJSgjevIg" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                <FontAwesomeIcon icon={faYoutubeSquare} className="text-3xl" />
              </a>
              <a href="https://discord.com/invite/zee7DKZp8C" aria-label="Discord" className="hover:opacity-80 transition-opacity">
                <FontAwesomeIcon icon={faDiscord} className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}