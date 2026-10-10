# Digital Nomad

App mobile (iOS e Android) que reúne cidades para nômades digitais: o usuário busca destinos, filtra por categoria e vê os detalhes de cada cidade, com pontos turísticos e mapa.


## Funcionalidades

- **Início:** busca de destinos e filtro por categoria (Destaques, Urbano, Praia, Natureza, Cultura, Shopping, História).
- **Busca:** resultados em tempo real, com a contagem de cidades encontradas.
- **Detalhes da cidade:** foto, categorias, descrição, pontos turísticos em accordion, mapa e sugestões de outras cidades ("Veja também").
- **Explorar:** cidades agrupadas por categoria em carrosséis horizontais.
- **Favoritos:** marcar cidades de interesse.
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
```

## Autor

João Fabris · [LinkedIn](https://www.linkedin.com/in/joaofabris) · [GitHub](https://github.com/JoaoFabris)
