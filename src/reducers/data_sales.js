const data = require("../data/stackline_frontend_assessment_data_2021.json");

const BASE = data[0];

const {id, title, image, subtitle, tags, sales} = BASE;


const dataReducer = (state = BASE, action) => {
    switch(action.type){
        case 'PRODUCTED':
            return(
                function productData(...BASE){
                    return {id, image, title, subtitle, tags};
                }
                
            )
        case 'TABLED':
            return action.payload;
        case 'GRAPHED':
            return(
                function groupData(...BASE){
                var rows = {sales};
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var ordered = {};
               
                for( var i = 0, len = rows.length; i < len; i++ ) {
                   var entry = rows[i];
                   var m = parseInt(entry.weekEnding.split("-")[1])-1;
                   if( !ordered[months[m]] ) { ordered[months[m]] = []; }
                   ordered[months[m]].push( entry );
               }
            }

            );
        default:
            return state;
    }

}



export default dataReducer;
