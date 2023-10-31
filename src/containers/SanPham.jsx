export default function SanPham ({sanpham}){
  
  let {idsp} = useParams()
  let chitiet = false

  if("idsp" in idsp){
      let chitiet = true
    sanpham = {
        idsp ,
        src : '',
        tensp : 'Daikin Inverter HP 23213213',
        gia : 21321321321321321,
        chitiet : 'Thông số sản phẩm'
    }
  }

    return (
        <>
        <div>{chitiet && `Chi tiết sản phẩm ${sanpham.idsp}`}</div>
            <div>
                <img src={sanpham.src} />
            </div>
            <div>
               {sanpham.tensp}
            </div>
            <div>
               {sanpham.gia}
            </div>
            <div>
               {chitiet && sanpham.chitiet}
            </div>
        </>
    )
}