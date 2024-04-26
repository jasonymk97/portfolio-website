import axiosService from '../lib/axiosService';

const BASE_URL = '/blizzard-api'; // Base URL for Battle.net API (local proxy setup assumed)
const accessToken = process.env.REACT_APP_BATTLENET_ACCESS_TOKEN;

const battlenetService = {
  // Function to fetch Hearthstone cards
  fetchHearthstoneCards: async (classType = 'mage', pageSize = 10, locale = 'en_US') => {
    const url = `${BASE_URL}/hearthstone/cards123`;
    const params = {
        locale,
        class: classType,
        pageSize,
    };
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    }
    
    return axiosService.get(url, params, headers);
  },

  fetchHearthstoneCardById: async (cardId, locale = 'en_US') => {
    const url = `${BASE_URL}/hearthstone/cards/${cardId}`;
    const params = {
        locale,
    };
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };
    
    return axiosService.get(url, params, headers);
  },
  // Add other Battle.net API functions as needed
};

export const sampleHearthstoneCards = {
    "cards": [
        {
            "id": 113180,
            "collectible": 1,
            "slug": "113180-aegwynn-the-guardian",
            "classId": 4,
            "multiClassIds": [],
            "cardTypeId": 4,
            "cardSetId": 1635,
            "rarityId": 5,
            "artistName": "Luke Mancini",
            "health": 5,
            "attack": 5,
            "manaCost": 5,
            "name": "Aegwynn, the Guardian",
            "text": "<b>Spell Damage +2</b> <b>Deathrattle:</b> The next minion you draw inherits these powers.",
            "image": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e6ac5580b63611926a1f7c1de79036a45e977bb9f5ee87a99373d75ddc448251.png",
            "imageGold": "",
            "flavorText": "With Medivh as her son, nothing YOU do could ever disappoint her.",
            "cropImage": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e63f767cc590dc8bbf7a9826aba0545ab10f9f0767b6614318358d444430ce99.png",
            "keywordIds": [
                2,
                12
            ],
            "copyOfCardId": 62347,
            "isZilliaxFunctionalModule": false,
            "isZilliaxCosmeticModule": false
        },
        {
            "id": 43426,
            "collectible": 1,
            "slug": "43426-aluneth",
            "classId": 4,
            "multiClassIds": [],
            "cardTypeId": 7,
            "cardSetId": 1004,
            "rarityId": 5,
            "artistName": "Izzy Hoover",
            "attack": 0,
            "manaCost": 6,
            "durability": 3,
            "name": "Aluneth",
            "text": "At the end of your turn, draw 3 cards.",
            "image": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7d94373aa22a1136af6898f9ce31d8d6ee0fbb18a0cc9c7e3c3c3f3cafaa94e3.png",
            "imageGold": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/06f5b1efef564e72035a2221453a649183e6754d9b4e8d5f2434a7feb6b50003.png",
            "flavorText": "PHENOMENAL ARCANE POWER…itty bitty living space.",
            "cropImage": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/75d9d5eb365f096a6be155461524caa2a450b293614f48eb2cc2021f5a72c6b4.png",
            "isZilliaxFunctionalModule": false,
            "isZilliaxCosmeticModule": false
        },
        {
            "id": 67873,
            "collectible": 1,
            "slug": "67873-amplified-snowflurry",
            "classId": 4,
            "multiClassIds": [],
            "minionTypeId": 18,
            "cardTypeId": 4,
            "cardSetId": 1626,
            "rarityId": 1,
            "artistName": "Junru Zhuo",
            "health": 3,
            "attack": 2,
            "manaCost": 2,
            "name": "Amplified Snowflurry",
            "text": "<b>Battlecry:</b> Your next Hero Power costs (0) and <b>Freezes</b> the target.",
            "image": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/17972ba245e93dbafe6650b5dd0faa3881d1859b7e2d2d8b02cc905d56def495.png",
            "imageGold": "",
            "flavorText": "I bet it’s just exaggerating.",
            "cropImage": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/47afd3928746980282bfeab5b153c38cb237cf5f3a4eb61e6755f5d5fe7488c4.png",
            "keywordIds": [
                8,
                10
            ],
            "isZilliaxFunctionalModule": false,
            "isZilliaxCosmeticModule": false
        },
        {
            "id": 54772,
            "collectible": 1,
            "slug": "54772-ancient-mysteries",
            "classId": 4,
            "multiClassIds": [],
            "spellSchoolId": 1,
            "cardTypeId": 5,
            "cardSetId": 1158,
            "rarityId": 1,
            "artistName": "Jim Nelson",
            "manaCost": 2,
            "name": "Ancient Mysteries",
            "text": "Draw a <b>Secret</b> from your deck. It costs (0).",
            "image": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d2085cbf7daaf2db99bba099ad6346dcc6f2759b8cce7234192d4f9865782a01.png",
            "imageGold": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c4d3a7fab8bc3293da858ee9273b30a6f1f8eec60d60afd2e70014969d6c8fa1.png",
            "flavorText": "I'm not saying it was aliens, but it was TOTALLY aliens!",
            "cropImage": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e5e84337af90319730bafad652891703d21a8ac90a47175bc337abe178274423.png",
            "keywordIds": [
                5
            ],
            "isZilliaxFunctionalModule": false,
            "isZilliaxCosmeticModule": false
        },
        {
            "id": 36111,
            "collectible": 1,
            "slug": "36111-animated-armor",
            "classId": 4,
            "multiClassIds": [],
            "cardTypeId": 4,
            "cardSetId": 20,
            "rarityId": 3,
            "artistName": "Mike Sass",
            "health": 4,
            "attack": 4,
            "manaCost": 4,
            "name": "Animated Armor",
            "text": "Your hero can only take 1 damage at a time.",
            "image": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0bb936d938083cdc49aa91961ccc6c6be34bc3c32bc8ea32be037f32437f6e09.png",
            "imageGold": "",
            "flavorText": "Try putting it on. Wait, let me get my camera.",
            "cropImage": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/9b4b47fc311643a107adf9858c0f93ed44ab1b8c2f2314543164108766baa0f8.png",
            "isZilliaxFunctionalModule": false,
            "isZilliaxCosmeticModule": false
        }
    ],
    "cardCount": 396,
    "pageCount": 80,
    "page": 1
}

export default battlenetService;
