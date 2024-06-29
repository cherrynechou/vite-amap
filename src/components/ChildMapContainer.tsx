import { forwardRef } from "react";
import {Map, Polygon} from "@uiw/react-amap";

interface childMapProps {
	zoomNum: number
}


const ChildMapContainer = forwardRef((props:childMapProps,ref)=>{

	const path2: any = [
		new AMap.LngLat(116.368904,39.913423),
		new AMap.LngLat(116.382122,39.901176),
		new AMap.LngLat(116.387271,39.912501),
		new AMap.LngLat(116.398258,39.904600)
	];
	
	const path: any = [
		[116.403322, 39.920255],
		[116.410703, 39.897555],
		[116.402292, 39.892353],
		[116.389846, 39.891365]
	];
	
	return (
		<Map zoom={props.zoomNum} center={[116.400274, 39.905812]}>
			// @ts-ignore
			<Polygon
				path={path}
				strokeColor="#FF33FF"
				strokeWeight={6}
				strokeOpacity={0.2}
				fillOpacity={0.4}
				fillColor="#1791fc"
				zIndex={50}
				draggable={true}
				onChange={(e: any)=>console.log(e)}
				onDragStart={(e: any)=>{console.log(e)}}
				onDragging={(e: any)=>{console.log(e)}}
				onDragEnd={(e: any)=>{console.log(e)}}
			/>
			// @ts-ignore
			<Polygon
				path={path2}
				strokeColor="#FF33FF"
				strokeWeight={6}
				strokeOpacity={0.2}
				fillOpacity={0.4}
				fillColor="#1791fc"
				zIndex={50}
			/>
			
		</Map>
	)
})

export default ChildMapContainer;





