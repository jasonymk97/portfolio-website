import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import battlenetService from '../services/battlenetService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import parse from 'html-react-parser';
import Loading from '../components/Loading';

const sampleData = {
    id: 113180,
    collectible: 1,
    slug: "113180-aegwynn-the-guardian",
    classId: 4,
    multiClassIds: [],
    cardTypeId: 4,
    cardSetId: 1635,
    rarityId: 5,
    artistName: "Luke Mancini",
    health: 5,
    attack: 5,
    manaCost: 5,
    name: "Aegwynn, the Guardian",
    text: "<b>Spell Damage +2</b> <b>Deathrattle:</b> The next minion you draw inherits these powers.",
    image: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e6ac5580b63611926a1f7c1de79036a45e977bb9f5ee87a99373d75ddc448251.png",
    flavorText: "With Medivh as her son, nothing YOU do could ever disappoint her.",
    cropImage: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e63f767cc590dc8bbf7a9826aba0545ab10f9f0767b6614318358d444430ce99.png",
    keywordIds: [2, 12],
    copyOfCardId: 62347,
    isZilliaxFunctionalModule: false,
    isZilliaxCosmeticModule: false,
};

const CardPage = () => {
    const { id } = useParams(); // Get the card ID from the URL
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true); // Loading flag
    const [error, setError] = useState(false); // Error flag

    // Fetch the card data based on the card ID
    useEffect(() => {
        setLoading(true); // Start loading
        const fetchCardData = async () => {
            const resp = await battlenetService.fetchHearthstoneCardById(id);
            if (resp.isError) {
                console.error('Error fetching card data:', resp.data);
                setError(true);
                setLoading(false);
                return;
            }

            setCardData(resp.data);
            setLoading(false);
            setError(false);
        };

        fetchCardData();
    }, [id]);

    // Render loading component when data is not yet loaded
    if (loading) {
        return (
            <>
                <Header />
                <div className="container mx-auto p-4 h-screen flex justify-center items-center">
                    <Loading />
                </div>
                <Footer />
            </>
        );
    }

    // Display network error message if an error occurred
    if (error) {
        return (
            <>
                <Header />
                <div className="container mx-auto p-4 h-screen flex justify-center items-center">
                    <div className="text-xl text-red-600">Network Error. Please try again later.</div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="container mx-auto p-4">
                <div className="flex bg-white rounded-lg shadow-md">
                    {/* Left section: Card Image */}
                    <div className="w-1/2 p-4">
                        <img
                            src={cardData.image}
                            alt={cardData.name}
                            className="rounded-lg w-full h-90"
                        />
                    </div>

                    {/* Right section: Card Details */}
                    <div className="w-1/2 p-4 pt-20">
                        <h1 className="text-5xl mb-4 bg-gradient-to-r from-sky-500 to-indigo-500 inline-block text-transparent bg-clip-text font-bold h-20">{cardData.name}</h1>
                        <p className="text-4xl text-gray-700 mb-4">
                            <strong className='text-blue-700'>Mana Cost:</strong> {cardData.manaCost}
                        </p>
                        <p className="text-4xl text-gray-700 mb-4">
                            <strong className='text-red-700'>Attack:</strong> {cardData.attack}
                        </p>
                        <p className="text-4xl text-gray-700 mb-4">
                            <strong className='text-green-700'>Health:</strong> {cardData.health}
                        </p>
                        <p className="text-4xl text-gray-700 mb-4">
                            <strong className='text-purple-700'>Text:</strong> {parse(cardData.text)}
                        </p>
                        <p className="text-4xl text-gray-700 mb-4">
                            <strong className='text-yellow-700'>Flavor Text:</strong> {cardData.flavorText}
                        </p>
                        <p className="text-4xl text-gray-700 mb-4">
                            <strong className='text-pink-700'>Artist:</strong> {cardData.artistName}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CardPage;
