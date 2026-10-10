# Digital Nomad

App mobile (iOS e Android) que reúne cidades para nômades digitais: o usuário busca destinos, filtra por categoria, vê os detalhes de cada cidade e salva as favoritas.

## Telas

| Início e busca | Detalhes da cidade |
|---|---|
| <img src="docs/home-busca.png" width="400" /> | <img src="docs/detalhes.png" width="240" /> |

| Autenticação |
|---|
| <img src="docs/auth.png" width="820" /> |

| Explorar, perfil e configurações |
|---|
| <img src="docs/explorar-perfil.png" width="820" /> |

## Funcionalidades

- **Autenticação:** cadastro, login e recuperação de senha por e-mail.
- **Início:** busca de destinos e filtro por categoria (Destaques, Urbano, Praia, Natureza, Cultura, Shopping, História).
- **Busca:** resultados com a contagem de cidades encontradas.
- **Detalhes da cidade:** foto, categorias, descrição, pontos turísticos em accordion, mapa e sugestões de outras cidades ("Veja também").
- **Explorar:** cidades agrupadas por categoria em carrosséis horizontais.
- **Favoritos:** marcar cidades e vê-las no perfil.
- **Perfil:** dados da conta, edição de perfil, troca de senha e logout.
- **Atualizações OTA:** novas versões chegam pelo EAS Update, sem republicar nas lojas.

## Stack

| Camada | Tecnologias |
|---|---|
| Mobile | React Native, Expo, Expo Router, TypeScript |
| Dados | API REST própria (Node.js) |
| Build e deploy | EAS Build, EAS Update (OTA) |
| Debug | Reactotron |

## Como rodar

Pré-requisitos: Node.js LTS e o app Expo Go no celular, ou um emulador Android/iOS.

```bash
git clone https://github.com/JoaoFabris/digital-nomad-app.git
cd digital-nomad-app
npm install
npx expo start
```

Depois, abra no Expo Go (QR code), no emulador Android (`a`) ou no simulador iOS (`i`).

## Estrutura

```
app/          # telas e navegação (Expo Router)
components/   # componentes reutilizáveis
docs/         # imagens deste README
```

## Autor

João Fabris · [LinkedIn](https://www.linkedin.com/in/joaofabris) · [GitHub](https://github.com/JoaoFabris)
