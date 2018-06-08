angular.module('zaareenApp', [])

    .controller('menu', function ($scope, $locale) {
        $scope.menu = 
{
"Category": {
"Sorted_Starters": [
{"veg": true,"Menu":"Hara Bhara Kebab","Description":"[4 Pieces] Vegetarian Kebabs prepared from potatoes and fresh spinach","Spice":"","Compliments":"Served with Humus & Chutney","Price":"169","Image":"harabharakebab"},
{"veg": true,"Menu":"Makhmali Paneer Kebab","Description":"[4 Pieces] Made out of Indian Paneer marinated overnight in spices and grilled in tandoor","Spice":"Y","Compliments":"Served with Humus & Chutney","Price":"199","Image":"makhmalipaneerkebab"},
{"Menu":"Murgh Reshmi Kebab","Description":"[6 Pieces of Boneless Chicken] Pieces of silky textured chicken, marinated in juicy mixture of curd, cream, cashew nuts and spices and then grilled in tandoor","Spice":"","Compliments":"Served with Humus & Chutney","Price":"249","Image":"murghreshmikebab"},
{"Menu":"Cheesy Sunehra Kebab","Description":"[6 Pieces of Boneless Chicken] Pieces of chicken, marinated in juicy mixture of curd, cream, cashew nuts and spices, layered with creamy cheese and then grilled in tandoor ","Spice":"","Compliments":"Served with Humus & Chutney","Price":"329","Image":"cheesysunehrakebab"},
{"Menu":"Mahi Mirch Kebab (Vetki)","Description":"[5 Pieces of Vetki Fish] Marinated in thick red gravy and grilled in tandoor","Spice":"Y","Compliments":"Served with Humus & Chutney","Price":"399","Image":"mahimirchkebab(vetki)"},
{"Menu":"Mahi Achari Kebab","Description":"[5 Pieces of Basa Fish] Marinated with Chilli Achar and grilled in tandoor","Spice":"Y","Compliments":"Served with Humus & Chutney","Price":"289","Image":"mahiacharikebab(basa)"},
{"Menu":"Murgh Tandoori (Half)","Description":"[Half Chicken] Marinated overnight in curd and spices and roasted in tandoor","Spice":"","Compliments":"Served with Humus & Chutney","Price":"259","Image":"murghtandoori"},
{"Menu":"Murgh Tandoori (Full)","Description":"[Full Chicken] Marinated overnight in curd and spices and roasted in tandoor","Spice":"","Compliments":"Served with Humus & Chutney","Price":"359","Image":"murghtandoori"},
{"Menu":"Gosht Sheek Kebab","Description":"[4 Pieces of minced mutton sheek] Prepared with minced gosht, onions and blend of spices and grilled in tandoor","Spice":"Y","Compliments":"Served with Humus & Chutney","Price":"289","Image":"goshtsheekkebab"},
{"Menu":"Nawabi Kebab Platter","Description":"[2 Pieces of Chicken Tangri, 3 Pieces of Murgh Reshmi and 3 Pieces of Murgh Hariyali]","Spice":"","Compliments":"Served with Humus & Chutney","Price":"299","Image":"nawabikebabplatter"},
{"Menu":"Murgh Hariyali Kebab","Description":"[6 Pieces of Boneless Chicken] Marinated in green gravy with spinach, mint and vegetables and grilled in tandoor","Spice":"","Compliments":"Served with Humus & Chutney","Price":"259","Image":"murghhariyalikebab"},
{"Menu":"Murgh Tikka Kebab","Description":"[6 Pieces of Boneless Chicken] Marinated in thick red gravy and grilled in tandoor","Spice":"","Compliments":"Served with Humus & Chutney","Price":"249","Image":"murghtikkakebab"},
],
"Shades_of_Biryani": [
{"veg": true,"Menu":"Subzi Tahiri","Description":"Fresh vegetables and soya chunks are prepared to perfection with an accurate blend of Indian spices basmati rice cooked in dum","Spice":"","Compliments":"Served with Raita & Salad","Price":"169","Image":"subzitahiri"},
{"veg": true,"Menu":"Paneer Dum Biryani","Description":"Cubes of paneer, and vegetables are prepared with Indian spices and basmati rice cooked in dum","Spice":"","Compliments":"Served with Raita & Salad","Price":"179","Image":"paneerdumbiryani"},
{"Menu":"Murgh Dum Biryani","Description":"1 piece of Chicken along with 1 potato and 1 egg prepared with blend of Indian spices and flavourful basmati rice cooked in dum","Spice":"","Compliments":"Served with Raita & Salad","Price":"189","Image":"murghdumbiryani"},
{"Menu":"Gosht Dum Biryani","Description":"1 piece of Mutton along with 1 potato and 1 egg prepared with blend of Indian spices and flavourful basmati rice cooked in dum","Spice":"","Compliments":"Served with Raita & Salad","Price":"239","Image":"goshtdumbiryani"},
{"Menu":"Sultani Murgh Biryani","Description":"2 pieces of Chicken along with 2 potatos and 2 eggs, prepared on dum with spices and basmati rice. Served in earthen haandi along with raita and salad - Sufficient for two","Spice":"","Compliments":"Served with Raita & Salad","Price":"349","Image":"sultanimurghbiryani"},
{"Menu":"Sultani Gosht Biryani","Description":"2 pieces of Mutton along with 2 potatos and 2 eggs, prepared on dum with spices and basmati rice. Served in earthen haandi along with raita and salad - Sufficient for two","Spice":"","Compliments":"Served with Raita & Salad","Price":"449","Image":"sultanigoshtbiryani"},
{"Menu":"Jhinga Biryani","Description":"One of Zaareen delicacies for prawn lovers, two big pieces of prawns, cooked on dum with basmati rice","Spice":"","Compliments":"Served with Raita & Salad","Price":"319","Image":"jhingabiryani"},
{"Menu":"Boti Biryani","Description":"One of Zaareen delicacies, gosht seekh kebab prepared separately and then cooked on dum with basmati rice, potato imparting a tandoori aroma","Spice":"","Compliments":"Served with Raita & Salad","Price":"259","Image":"botibiryani"},
{"Menu":"Mirch-da-Gosht Biryani","Description":"One of Zaareen delicacies, a non - conventional biryani cooked on dum with basmati rice with 1 piece of mutton, and egg along with black pepper","Spice":"Y","Compliments":"Served with Raita & Salad","Price":"249","Image":"mirch-da-goshtbiryani"},
{"Menu":"Zaareen Shahi Biryani","Description":"One of Zaareen delicacies, combining 1 piece of chicken, 2 minced mutton balls, 1 egg and 1 potato prepared with Indian spices and basmati rice","Spice":"","Compliments":"Served with Raita & Salad","Price":"269","Image":"zaareenshahibiryani"},
{"Menu":"Egg Biryani","Description":"Contains 2 eggs and 1 potato in a traditional Biryani","Spice":"","Compliments":"Served with Raita & Salad","Price":"159","Image":"eggbiryani"},
],
"Perfect_Salans": [
{"veg": true,"Menu":"Nargisi Kofta","Description":"[4 Pieces] Pieces of koftas are prepared with vegetables and paneer, and served in white gravy","Spice":"","Compliments":"","Price":"229","Image":"nargisikofta"},
{"veg": true,"Menu":"Makhan Subziwala","Description":"One of Zaareen Delicacies. Fresh vegetables cooked slowly on low heat along with Indian spices and butter, layered with fresh crème","Spice":"","Compliments":"","Price":"199","Image":"makhansubziwala"},
{"veg": true,"Menu":"Shahi Paneer Masala","Description":"Cubes of paneer are simmered in a creamy white curry with mild and sweet undertones of whole spices","Spice":"","Compliments":"","Price":"219","Image":"shahipaneermasala"},
{"Menu":"Gosht Lahori","Description":"[4 Pieces] Made by stir frying cubes and minced mutton with tomatoes, green chilies, ginger and garlic","Spice":"Y","Compliments":"","Price":"349","Image":"goshtlahori"},
{"Menu":"Sultani Bhuna Gosht","Description":"[4 Pieces] Gosht prepared in a spicy thick but dry gravy with bhuna masala","Spice":"Y","Compliments":"","Price":"329","Image":"sultanibhunagosht"},
{"Menu":"Mughlai Murgh Changezi","Description":"[6 Pieces of Boneless Chicken] A popular chicken delicacy in North India, is said to have its link with Chenghis Khan. Chicken is cooked in a subtle gravy made with a handful of Indian spice","Spice":"","Compliments":"","Price":"249","Image":"mughlaimurghchangezi"},
{"Menu":"Murgh Tikka Lababdar","Description":"[6 Pieces of Boneless Chicken] Prepared and simmered in a semi - red gravy imparting the taste of  Indian spices","Spice":"Y","Compliments":"","Price":"269","Image":"murghtikkalababdar"},
{"Menu":"Kadai Handi Murgh","Description":"[5 Pieces of Chicken with Bone] Served in a thick gravy along with big chunky pieces of onion, capsicum and tomatoes","Spice":"","Compliments":"","Price":"219","Image":"kadaihandimurgh"},
{"Menu":"Murgh Bharta","Description":"[Shredded Chicken] One of Zaareen delicacies, typically popular in roadside dhabas, we at Zaareen, add some extra flavours to that to make it suited for Kolkatans","Spice":"","Compliments":"","Price":"219","Image":"murghbharta"},
{"Menu":"Murgh Reshmi Masala","Description":"[6 Pieces of Boneless Chicken] prepared in white gravy from Reshmi Tikka","Spice":"","Compliments":"","Price":"289","Image":"murghreshmimasala"},
{"Menu":"Mahi Begum Bahar","Description":"[4 Pieces of Basa Fish] slow fried and cooked with onions and capsicum in red gravy (One of Zaareen Delicacies)","Spice":"","Compliments":"","Price":"289","Image":"mahibegumbahar(basa)"},
{"Menu":"Mahi Tikka Masala (Vetki)","Description":"[4 Pieces of Vetki Fish] Cooked from Vetki Tikka in a red gravy","Spice":"Y","Compliments":"","Price":"399","Image":"mahitikkamasala(vetki)"},
],
"Butterly_Breads": [
{"veg": true,"Menu":"Plain Naan","Description":"Amazingly soft and fluffy oven - baked flat bread","Spice":"","Compliments":"","Price":"39","Image":"plainnaan"},
{"veg": true,"Menu":"Butter Naan","Description":"Amazingly soft and fluffy oven - baked flat bread with a layer of butter","Spice":"","Compliments":"","Price":"49","Image":"butternaan"},
{"veg": true,"Menu":"Masala Naan","Description":"Amazingly soft and fluffy oven - baked flat bread with stuffing of minced vegetables","Spice":"","Compliments":"","Price":"79","Image":"masalanaan"},
{"Menu":"Lasooni Naan","Description":"Amazingly soft and fluffy oven - baked flat bread with a layer of garlic","Spice":"","Compliments":"","Price":"69","Image":"lasooninaan"},
{"Menu":"Gosht Keema Naan","Description":"Amazingly soft and fluffy oven - baked flat bread with stuffing of prepared minced gosht","Spice":"","Compliments":"","Price":"129","Image":"goshtkeemanaan"},
],
"Daring_Desserts": [
{"Menu":"Shahi Firni","Description":"A sweet Indian dish made out of thickened milk, dried fruit and ground rice and refrigerated overnight","Spice":"","Compliments":"","Price":"49","Image":"shahifirni"}
]
}
}		
    }
    );