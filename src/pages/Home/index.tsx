import React, { useCallback, useState } from 'react';
import { Actions, AddFavorites, Apresentation, ApresentationImg, ApresentationText, Button, ButtonStart, CardActionFavoriteBook, CardBook, CardBookImg, CardBookInfo, CardBookResponse, CardFavoriteBook, CardImgFavoriteBook, CardInfoFavoriteBook, Container, ContainerContent, Content, DoASearch, Favorites, IconStar, LearnMore, Main, MYBooks, Search } from './styles';
import background from '../../assets/bg1.svg';
import { FiArrowDownCircle, FiSearch } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import apiGoogle from '../../services/apiBook';
import { ResponseAPIGoogleBooks, ResponseAPIGoogleBooksItem } from '../../dtos/Response';
import { BsBook } from 'react-icons/bs';

const Home: React.FC = () => {

    const [errApi, setErrApi] = useState(false);

    const [favoritesBook, setFavoritesBook] = useState<ResponseAPIGoogleBooksItem[]>(() => {
        const localFavoriteBooks = localStorage.getItem('@BookFinder:favoritesBook');

        if (localFavoriteBooks) {
            return JSON.parse(localFavoriteBooks);
        }
        return [];
    });

    const [value, setValue] = useState('');

    const [selectCategory, setSelectCategory] = useState('');

    const [inputError, setInputError] = useState(false);

    const [data, setData] = useState<ResponseAPIGoogleBooks>({ items: [], totalItems: 0 });

    const handleSubmit = useCallback((value: string, selectCategory: string) => {
        if (value === '') {
            setInputError(true)
        } else {


            if (selectCategory === 'titulo') {
                apiGoogle.get<ResponseAPIGoogleBooks>(`intitle:${value}`).then((response => {
                    setData(response.data);

                })).catch(
                    response => {
                        setErrApi(true)
                    }
                )
            } else {
                apiGoogle.get<ResponseAPIGoogleBooks>(`inauthor:${value}`).then((response) => {
                    setData(response.data)

                }).catch(
                    response => {
                        setErrApi(true)
                    }
                )
            }
        }
    }, [])

    const handleAddAndRemoveFavorites = useCallback((item: ResponseAPIGoogleBooksItem) => {

        const alreadyFavoriteBook = favoritesBook.findIndex(favorite => favorite.id === item.id);

        if (alreadyFavoriteBook < 0) {
            const book: ResponseAPIGoogleBooksItem = {
                volumeInfo: item.volumeInfo,
                favorite: true,
                id: item.id,
            }
            setFavoritesBook([...favoritesBook, book])
        }

        if (alreadyFavoriteBook >= 0) {
            const newFavoriteBook = favoritesBook.filter(favorite => favorite.id !== item.id)
            setFavoritesBook(newFavoriteBook);
        }


    }, [favoritesBook]);

    localStorage.setItem('@BookFinder:favoritesBook', JSON.stringify(favoritesBook));

    return (
        <>
            <Container>
                <Content>
                    <Apresentation>
                        <ApresentationText>
                            <h1>BookFinder</h1>
                            <ButtonStart>
                                <FiArrowDownCircle size={25} />
                                <p>Start</p>
                            </ButtonStart>
                        </ApresentationText>
                        <ApresentationImg>
                            <img src={background} alt="Estante de Livros" />
                        </ApresentationImg>
                    </Apresentation>
                </Content>
            </Container>
            <Main>
                <Content>
                    <ContainerContent>
                        <Search>
                            <Button inputError={inputError}>
                                <input type='text' placeholder='Nome do autor ou do título' onBlur={(e) => setValue(e.target.value)} onFocus={(e) => setInputError(false)} />
                                <select name="categoria" id="categoria" onChange={(e) => setSelectCategory(e.target.value)} onFocus={(e) => setInputError(false)}>
                                    <option value="">Selecione</option>
                                    <option value="autor">Autor</option>
                                    <option value="titulo">Título</option>
                                </select>
                                <button type='button' onClick={() => handleSubmit(value, selectCategory)}> <FiSearch /> <p>Pesquisar</p></button>
                            </Button>
                            <CardBookResponse>
                                {data.items !== undefined && data.items.length > 0 ? data?.items.map((item) => {

                                    const searchFavoriteBooksInData = favoritesBook.find(favorite => favorite.id === item.id);



                                    return (
                                        <CardBook key={item.id}>
                                            {item.volumeInfo.imageLinks ? <CardBookImg>
                                                <img src={item.volumeInfo.imageLinks.thumbnail} alt="Livro" />
                                            </CardBookImg> : <CardBookImg>
                                                    <BsBook size={70} />
                                                </CardBookImg>}
                                            <CardBookInfo>
                                                <h1>{item.volumeInfo.title}</h1>
                                                {item.volumeInfo.authors === undefined ? <p></p> : item.volumeInfo.authors.map((author) => (<p>{author}</p>))}
                                                {item.volumeInfo.categories === undefined ? <p></p> : <p>{item.volumeInfo.categories.map((category) => (category))}</p>}
                                            </CardBookInfo>
                                            <Actions>
                                                <AddFavorites>
                                                    <IconStar isFavorite={!!searchFavoriteBooksInData}>
                                                        <AiOutlineStar size={20} onClick={() => handleAddAndRemoveFavorites(item)} />
                                                    </IconStar>
                                                    <p>Favoritos</p>
                                                </AddFavorites>
                                                <LearnMore>
                                                    <a target="blank" href={item.volumeInfo.previewLink}>lean more</a>
                                                </LearnMore>
                                            </Actions>
                                        </CardBook>

                                    )
                                }) : <DoASearch errApi={errApi}>{errApi ? <p>Nenhum dado foi encontrado. Tente novamente</p> : <p>Faça uma busca</p>}</DoASearch>}


                            </CardBookResponse>
                        </Search>

                        <Favorites>
                            <MYBooks>
                                <h1>Meus Livros Favoritos</h1>
                            </MYBooks>
                            {favoritesBook.map((item) => (
                                <CardFavoriteBook>
                                    {item.volumeInfo.imageLinks ? <CardImgFavoriteBook>
                                        <img src={item.volumeInfo.imageLinks?.thumbnail} alt="Livro" />
                                    </CardImgFavoriteBook> : <CardImgFavoriteBook>
                                            <BsBook size={70} />
                                        </CardImgFavoriteBook>}
                                    <CardInfoFavoriteBook>
                                        <h1>{item.volumeInfo.title}</h1>
                                        {item.volumeInfo.authors === undefined ? <p></p> : <h2>{item.volumeInfo.authors.map((author) => (author))}</h2>}
                                        {item.volumeInfo.categories === undefined ? <p></p> : <h3>{item.volumeInfo.categories.map((category) => (category))}</h3>}
                                    </CardInfoFavoriteBook>
                                    <CardActionFavoriteBook>
                                        <AddFavorites>
                                            <IconStar isFavorite={item.favorite}>
                                                <AiOutlineStar size={20} onClick={() => handleAddAndRemoveFavorites(item)} />
                                            </IconStar>
                                            <p>Favoritos</p>
                                        </AddFavorites>
                                        <LearnMore>
                                            <a target="blank" href={item.volumeInfo.previewLink}>lean more</a>
                                        </LearnMore>
                                    </CardActionFavoriteBook>
                                </CardFavoriteBook>
                            ))}
                        </Favorites>
                    </ContainerContent>
                </Content>
            </Main>

        </>

    )
}

export default Home;