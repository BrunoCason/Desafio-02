const DevInfo = () => {
  return (
    <main className="bg-wisper">
      <section className="container mx-auto pb-10">
        <h1 className="font-garamond text-6xl text-lunar-green font-bold text-center pt-10 pb-14">
          About <span className="text-avacado">Us</span>
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white shadow w-56">
              <img
                className="w-full"
                src="/src/assets/image-bruno.png"
                alt=""
              />
              <p className="font-garamond text-lunar-green text-center font-bold text-2xl">
                Bruno
              </p>
              <p className="border rounded-2xl border-green-500 text-green-500 bg-green-100 text-center text-xs mt-2 mb-2 ml-16 mr-16">
                Desenvolvedor
              </p>
              <p className="font-garamond text-base font-normal ml-5 mr-5 text-secondary text-justify">
                Meu nome é Bruno, tenho 20 anos e sou de Franca, São Paulo.
                Atualmente, estou cursando ADS na FATEC. Sou apaixonado pelo
                desenvolvimento front-end e estou sempre em busca de novas
                oportunidades para aprimorar minhas habilidades nessa área. O
                programa de bolsas tem sido uma experiência fantástica para mim.
                Pude evoluir não apenas como programador, mas também como
                pessoa. Tenho aprendido muito e estou aplicando esses
                conhecimentos em projetos que realmente me desafiam e me motivam
                a dar o meu melhor.
              </p>
              <div className="flex justify-center mt-2 border-t-2 border-t-lunar-green mr-5 ml-5 p-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/bruno-cason-748380221/"
                  target="_blank"
                >
                  <img
                    src="/src/assets/icon-linkedin.png"
                    alt=""
                    className="hover:scale-110"
                  />
                </a>

                <a href="https://github.com/BrunoCason" target="_blank">
                  <img
                    src="/src/assets/icon-github.png"
                    alt=""
                    className="hover:scale-110"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white shadow w-56">
              <img className="w-full" src="/src/assets/image-joao.jpg" alt="" />
              <p className="font-garamond text-lunar-green text-center font-bold text-2xl">
                João
              </p>
              <p className="border rounded-2xl border-green-500 text-green-500 bg-green-100 text-center text-xs mt-2 mb-2 ml-16 mr-16">
                Desenvolvedor
              </p>
              <p className="font-garamond text-base font-normal ml-5 mr-5 sm:mb-44 text-secondary text-justify">
                Olá, meu nome é João Vitor, tenho 32 anos e sou de
                Taquaritinga-SP. Atualmente estou no 8° semestre do curso de ADS
                na Fatec, gosto muito da área do front end e pretendo seguir
                carreira. No programa de bolsas da Compass estou adquirindo
                conhecimento suficiente para avançar nos projetos e compartilhar
                informações que possam fazer a diferença, obrigado!
              </p>
              <div className="flex justify-center mt-5 border-t-2 border-t-lunar-green mr-5 ml-5 p-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-vitor-miguel-bazaca-3a358371/"
                  target="_blank"
                >
                  <img
                    src="/src/assets/icon-linkedin.png"
                    alt=""
                    className="hover:scale-110"
                  />
                </a>

                <a href="https://github.com/Bazack02" target="_blank">
                  <img
                    src="/src/assets/icon-github.png"
                    alt=""
                    className="hover:scale-110"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white shadow w-56">
              <img
                className="w-full"
                src="/src/assets/image-thalles.jpeg"
                alt=""
              />
              <p className="font-garamond text-lunar-green text-center font-bold text-2xl">
                Thalles
              </p>
              <p className="border rounded-2xl border-green-500 text-green-500 bg-green-100 text-center text-xs mt-2 mb-2 ml-16 mr-16">
                Desenvolvedor
              </p>
              <p className="font-garamond text-base font-normal sm:mb-20 ml-5 mr-5 text-secondary text-justify">
                Olá! Sou um loucamente apaixonado por desenvolvimento de
                software, me desafio a não ser mais um mero desenvolvedor, mas
                sim, um dos melhores. Estou tendo a grande oportunidade da minha
                vida, a qual tenho tirando o máximo e mais um pouco. Tanto no
                que se trata de conhecimento, vivência, experiência
                interpessoal, mas sobretudo: tenho me tornado um pessoa melhor a
                cada dia. Estou empolgadíssimo para continuar essa maravilhosa
                jornada.
              </p>
              <div className="flex justify-center mt-5 border-t-2 border-t-lunar-green mr-5 ml-5 p-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/thallesmanjaterra/"
                  target="_blank"
                >
                  <img
                    src="/src/assets/icon-linkedin.png"
                    alt=""
                    className="hover:scale-110"
                  />
                </a>

                <a href="https://github.com/thallesManjaterra" target="_blank">
                  <img
                    src="/src/assets/icon-github.png"
                    alt=""
                    className="hover:scale-110"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white shadow w-56">
              <img
                className="w-full"
                src="/src/assets/image-vinicius.jpeg"
                alt=""
              />
              <p className="font-garamond text-lunar-green text-center font-bold text-2xl">
                Vinícius
              </p>
              <p className="border rounded-2xl border-green-500 text-green-500 bg-green-100 text-center text-xs mt-2 mb-2 ml-16 mr-16">
                Desenvolvedor
              </p>
              <p className="font-garamond text-base font-normal mb-7 ml-5 mr-5 text-secondary text-justify">
                Olá, me chamo Vinícius, tenho 21 anos, moro em Franca - SP e sou
                estudante de programação. Atualmente estou no quarto semestre do
                curso superior em Análise e Desenvolvimento de Sistemas na Fatec
                Franca. Gosto muito de aprender sobre tecnologia e estou em
                busca do meu sonho de me tornar um programador full stack. O
                programa de bolsas Compass está me ajudando muito nesse
                processo, pois o contato com diversas tecnologias e pessoas me
                proporciona uma visão ampla e enriquecedora do mundo da
                programação.
              </p>
              <div className="flex justify-center mt-5 border-t-2 border-t-lunar-green mr-5 ml-5 p-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/vinicius-santana-4553a4260/"
                  target="_blank"
                >
                  <img
                    src="/src/assets/icon-linkedin.png"
                    alt=""
                    className="hover:scale-110"
                  />
                </a>

                <a href="https://github.com/ViniciusSTN" target="_blank">
                  <img
                    src="/src/assets/icon-github.png"
                    alt=""
                    className="hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DevInfo;
