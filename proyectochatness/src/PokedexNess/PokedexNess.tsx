import React, {useEffect, useState} from 'react';
import "nes.css/css/nes.min.css";
import "@fontsource/press-start-2p";

function PokedexNess() {

        const [countpkm, setcountpkm] = useState(1);
        const [pokemon, setpokemon] = useState("");

        //info pkmn
        const [namepokemon, setnamepokemon] = useState("");
        const [imgpokemon, setimgpokemon] = useState("");
        const [firstippkm, setfirstippkm] = useState("");
        const [secondippkm, setsecondippkm] = useState("");

        //stats
        const [hp, sethp] = useState(0);
        const [speed, setspeed] = useState(0);
        const [spcdefense, setspcdefense] = useState(0);
        const [spcattack, setspcattack] = useState(0);
        const [defense, setdefense] = useState(0);
        const [attack, setattack] = useState(0);

        //
        const [encontrado, setencontrado] = useState(true);

        const getpokemon = async () => {

            const pkmn = await fetch('https://pokeapi.co/api/v2/pokemon/' + countpkm)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setnamepokemon(data.name);
                    setimgpokemon(data.sprites.front_default);
                    setcountpkm(data.id);
                    if(data.types.length > 1)
                    {
                        setfirstippkm(getAssetTypeEn(data.types[0].type.name));
                        setsecondippkm(getAssetTypeEn(data.types[1].type.name));
                    }
                    else{
                        setfirstippkm(getAssetTypeEn(data.types[0].type.name));
                        setsecondippkm(getAssetTypeEn("NN"));
                    }
                    sethp(data.stats[0].base_stat);
                    setspeed(data.stats[5].base_stat);
                    setspcdefense(data.stats[4].base_stat);
                    setspcattack(data.stats[3].base_stat);
                    setdefense(data.stats[2].base_stat);
                    setattack(data.stats[1].base_stat);
                    setencontrado(true);
                })
                .catch(err => {
                    console.error(err);
                    setpokemon("");
                    setencontrado(false);
                });
            console.log(pkmn);
        };

        const getpokemonname = async () => {

            let parpkm = pokemon == "" ? "1" : pokemon;

            const pkmn = await fetch('https://pokeapi.co/api/v2/pokemon/' + parpkm)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setnamepokemon(data.name);
                    setimgpokemon(data.sprites.front_default);
                    setcountpkm(data.id);
                    if(data.types.length > 1)
                    {
                        setfirstippkm(getAssetTypeEn(data.types[0].type.name));
                        setsecondippkm(getAssetTypeEn(data.types[1].type.name));
                    }
                    else{
                        setfirstippkm(getAssetTypeEn(data.types[0].type.name));
                        setsecondippkm(getAssetTypeEn("NN"));
                    }
                    sethp(data.stats[0].base_stat);
                    setspeed(data.stats[5].base_stat);
                    setspcdefense(data.stats[4].base_stat);
                    setspcattack(data.stats[3].base_stat);
                    setdefense(data.stats[2].base_stat);
                    setattack(data.stats[1].base_stat);
                    setencontrado(true);
                })
                .catch(err => {
                    console.error(err);
                    setpokemon("");
                    setencontrado(false);
                });
            console.log(pkmn);
        };

        function getAssetTypeEn(type: string){
            switch(type){
                case 'normal':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20170114100442/Tipo_normal.gif';
                case 'fighting':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/b/b7/latest/20170114100336/Tipo_lucha.gif';
                case 'flying':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/e/e1/latest/20191118232224/Tipo_volador.gif';
                case 'poison':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/1/10/latest/20191118232220/Tipo_veneno.gif';
                case 'ground':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/1/1d/latest/20191118232216/Tipo_tierra.gif';
                case 'rock':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20170114100446/Tipo_roca.gif';
                case 'bug':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/f/fe/latest/20191118232226/Tipo_bicho.gif';
                case 'ghost':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/4/47/latest/20170114100329/Tipo_fantasma.gif';
                case 'steel':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/d/d9/latest/20191118232245/Tipo_acero.gif';
                case 'fire':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/c/ce/latest/20170114100331/Tipo_fuego.gif';
                case 'water':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/9/94/latest/20191118232235/Tipo_agua.gif';
                case 'grass':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/d/d6/latest/20170114100444/Tipo_planta.gif';
                case 'electric':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/1/1b/latest/20170114100155/Tipo_el%C3%A9ctrico.gif';
                case 'psychic':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20170114100445/Tipo_ps%C3%ADquico.gif';
                case 'ice':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20170114100333/Tipo_hielo.gif';
                case 'dragon':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20170114100154/Tipo_drag%C3%B3n.gif';
                case 'dark':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20191118232327/Tipo_siniestro.gif';
                case 'fairy':
                    return 'https://images.wikidexcdn.net/mwuploads/wikidex/b/bc/latest/20170114100332/Tipo_hada.gif';
                default:
                    return 'https://cdn2.bulbagarden.net/upload/3/3c/UnknownIC_Big.png';
            }
        }

        const restpkm = async () => {
            if (countpkm <= 1) {
                setcountpkm(1)
            }
            else{
                setcountpkm(countpkm - 1)
            }
        };

        const sumpkm = async () => {
            if (countpkm > 150) {
                setcountpkm(1)
            }
            else {
                setcountpkm(countpkm + 1)
            }
        };

        useEffect( () =>{
            console.log("entra");
            getpokemon();
        },[countpkm]);

        return (
            <>
                <a>PokedexNess + {' '}</a>
                https://pokeapi.co/api/v2/pokemon/1
                <div className="nes-container is-dark with-title">
                    <div style={{backgroundColor:"#212529", padding: "1rem"}} className="nes-field is-inline">
                        <label htmlFor="dark_field" style={{color:"#fff"}}>Nombre</label>
                        <input type="text" id="dark_field" className="nes-input is-dark" placeholder="Pokémon" value={pokemon} onChange={(e)=> setpokemon(e.target.value)}/>
                        <button type="button" className="nes-btn is-success" onClick={getpokemonname}>Buscar</button>
                    </div>
                </div>
                {
                    encontrado ?
                    <div>
                        <div className="nes-container is-dark with-title" style={{textAlign: "center"}}>
                            <button type="button" className="nes-btn is-success" onClick={restpkm}>Anterior</button>
                            <span className="nes-text">{" "}{namepokemon}{" "}</span>
                            <button type="button" className="nes-btn is-success" onClick={sumpkm}>Siguiente</button>
                        </div>
                        <div className="nes-container is-dark with-title">
                            <div style={{textAlign: "center"}}>
                                <img src={imgpokemon} alt="" width={200}/>
                                <br/>
                                <a href="#" className="nes-badge">
                                    <img src={firstippkm} style={{width: "50%"}}/>
                                </a>
                                <a href="#" className="nes-badge">
                                    <img src={secondippkm} style={{width: "50%"}}/>
                                </a>
                            </div>
                            <div className="nes-table-responsive">
                                <table className="nes-table is-bordered is-centered is-dark"
                                       style={{width: "30%", margin: "auto"}}>
                                    <tbody>
                                    <tr>
                                        <td>Speed</td>
                                        <td>
                                            <progress className="nes-progress is-primary" value={speed} max="150"
                                                      style={{width: "98%"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Special Defense</td>
                                        <td>
                                            <progress className="nes-progress is-success" value={spcdefense} max="150"
                                                      style={{width: "98%"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Special Attack</td>
                                        <td>
                                            <progress className="nes-progress is-error" value={spcattack} max="150"
                                                      style={{width: "98%"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Defense</td>
                                        <td>
                                            <progress className="nes-progress is-warning" value={defense} max="150"
                                                      style={{width: "98%"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Attack</td>
                                        <td>
                                            <progress className="nes-progress is-error" value={attack} max="150"
                                                      style={{width: "98%"}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>HP</td>
                                        <td>
                                            <progress className="nes-progress is-success" value={hp} max="150"
                                                      style={{width: "98%"}}/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="nes-container is-dark with-title">
                        <p className="title">Info. Pokémon</p>
                        <p>Pokémon no encontrado favor intentar con otro nombre.</p>
                    </div>
                }
            </>
        );
}
export default PokedexNess;
