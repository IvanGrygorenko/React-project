import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

export default function Categories() {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <Link className="category-link" to="/products/11/pobutovatechnika">
                        <img src="https://skin.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/1/4/1459781_beko_16.jpg" alt="" />
                        <h3>Побутова техніка</h3>
                    </Link>

                </div>
                <div className="row">
                    <Link className="category-link" to="/products/12/posud">
                        <img src="/img/skovoroda.png" alt="" />
                        <h3>Посуд</h3>
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="row">
                        <Link className="category-link" to="/products/3/audio">
                            <img src="/img/garnitura.png" alt="" />
                            <h3>Аудіо-техніка</h3>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <Link className="category-link" to="/products/4/phototechnika">
                            <img src="/img/foto.png" alt="" />
                            <h3>Фото-техніка</h3>
                        </Link>
                    </div></div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="row">
                        <Link className="category-link" to="/products/5/tovarydlyagamingu">
                            <img src="/img/play.png" alt="" />
                            <h3>Товари для геймінгу</h3>
                        </Link>
                    </div></div>
                <div className="row">
                    <div className="row">
                        <Link className="category-link" to="/products/6/krasatazdorovya">
                            <img src="/img/fen.png" alt="" />
                            <h3>Краса та здоров'я</h3>
                        </Link>
                    </div></div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="row">
                        <Link className="category-link" to="/products/7/pobutovakhimiya">
                            <img src="/img/himiya.png" alt="" />
                            <h3>Побутова хімія</h3>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <Link className="category-link" to="/products/8/dzherelazhyvlennya">
                            <img src="/img/gena.png" alt="" />
                            <h3>Джерела живлення</h3>
                        </Link>
                    </div></div>
            </div>
        </div>
    )
}