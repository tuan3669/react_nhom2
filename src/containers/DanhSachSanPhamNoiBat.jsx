import React from 'react'
import { Link } from 'react-router-dom';
import SanPham from './SanPham';
import {  useParams } from 'react-router-dom';
export default function DanhSachSanPhamNoiBat() {
 
 let {iddm} = useParams();
 let dsSPNB = []
 let tatCaDM = true
 if("iddm" in iddm){
  dsSPNB =[
    {
      idsp :"ml1",
      src : '',
      tensp : 'Daikin Inverter 1 HP ft2321321',
      gia : 230000000,
    },
    {
      idsp :"ml2",
      src : '',
      tensp : 'Panasonic Inverter 2 HP ft2321321',
      gia : 530000000,
    },
    {
      idsp :"ml3",
      src : '',
      tensp : 'SAM SUNG 3 HP ft2321321',
      gia : 90000000,
    }
  ]

 }
 
 
 
  return (
    <>
    
    {
        tatCaDM ? "danh sách tất cả sản phẩm theo danh mục nổi bật" : `Sản phẩm theo danh mục ${iddm}`
    }

    {
      dsSPNB.map(sp=> {
        <Link to={`/sanpham/chitiet/${sp.idsp}`}>
          <SanPham sanpham={sp}/>
        </Link>
      } )
    }
    </>
  )
}
