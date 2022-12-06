const FileOutPutButtonTwo = (props) => {
  if (props.ContentTarget === undefined || props.ContentTarget.length === 0);

  let F = "";
  let G = "";
  let H = "";
  const FileProcessTwo = () => {
    let Z = props.contentOutputTargetRef.current.value;

    const Function1 = () => {
      F = Z.replaceAll(
        `["wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
        "0"
      )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(`["weeping_vines_age":25]`, "25")
        .replaceAll(`["wood_type":"acacia"]`, "4")
        .replaceAll(`["wood_type":"birch"]`, "2")
        .replaceAll(`["wood_type":"dark_oak"]`, "5")
        .replaceAll(`["wood_type":"jungle"]`, "3")
        .replaceAll(`["wood_type":"oak"]`, "0")
        .replaceAll(`["wood_type":"spruce"]`, "1")
        .replaceAll(`[age":0,"direction":0]`, "0")
        .replaceAll(`[age":0]`, "0")
        .replaceAll(`[age":10]`, "10")
        .replaceAll(`[age":11]`, "11")
        .replaceAll(`[age":12]`, "12")
        .replaceAll(`[age":13]`, "13")
        .replaceAll(`[age":14]`, "14")
        .replaceAll(`[age":15]`, "15")
        .replaceAll(`[age":1]`, "1")
        .replaceAll(`[age":2,"direction":0]`, "0")
        .replaceAll(`[age":2,"direction":1]`, "1")
        .replaceAll(`[age":2,"direction":2]`, "2")
        .replaceAll(`[age":2,"direction":3]`, "3")
        .replaceAll(`[age":2]`, "2")
        .replaceAll(`[age":3]`, "3")
        .replaceAll(`[age":4]`, "4")
        .replaceAll(`[age":5]`, "5")
        .replaceAll(`[age":6]`, "6")
        .replaceAll(`[age":7]`, "7")
        .replaceAll(`[age":8]`, "8")
        .replaceAll(`[age":9]`, "9")
        .replaceAll(
          `[age_bit":true,"bamboo_leaf_size":"large_leaves","bamboo_stalk_thickness":"thick"]`,
          "0"
        )
        .replaceAll(
          `[age_bit":true,"bamboo_leaf_size":"large_leaves","bamboo_stalk_thickness":"thin"]`,
          "0"
        )
        .replaceAll(
          `[age_bit":true,"bamboo_leaf_size":"no_leaves","bamboo_stalk_thickness":"thick"]`,
          "0"
        )
        .replaceAll(
          `[age_bit":true,"bamboo_leaf_size":"no_leaves","bamboo_stalk_thickness":"thin"]`,
          "0"
        )
        .replaceAll(
          `[age_bit":true,"bamboo_leaf_size":"small_leaves","bamboo_stalk_thickness":"thick"]`,
          "1"
        )
        .replaceAll(
          `[age_bit":true,"bamboo_leaf_size":"small_leaves","bamboo_stalk_thickness":"thin"]`,
          "0"
        )
        .replaceAll(`[age_bit":true,"sapling_type":"jungle"]`, "3")
        .replaceAll(`[age_bit":true,"sapling_type":"spruce"]`, "1")
        .replaceAll(`[allow_underwater_bit":false,"explode_bit":false]`, "0")
        .replaceAll(
          `[attached_bit":false,"direction":0,"powered_bit":false]`,
          "0"
        )
        .replaceAll(
          `[attached_bit":false,"direction":1,"powered_bit":false]`,
          "1"
        )
        .replaceAll(
          `[attached_bit":false,"direction":2,"powered_bit":false]`,
          "2"
        )
        .replaceAll(
          `[attached_bit":false,"direction":3,"powered_bit":false]`,
          "3"
        )
        .replaceAll(
          `[attached_bit":false,"disarmed_bit":false,"powered_bit":false,"suspended_bit":false]`,
          "0"
        )
        .replaceAll(
          `[attached_bit":false,"disarmed_bit":false,"powered_bit":false,"suspended_bit":true]`,
          "0"
        )
        .replaceAll(
          `[attachment":"hanging","direction":0,"toggle_bit":false]`,
          "0"
        )
        .replaceAll(
          `[attachment":"hanging","direction":1,"toggle_bit":false]`,
          "1"
        )
        .replaceAll(
          `[attachment":"hanging","direction":2,"toggle_bit":false]`,
          "2"
        )
        .replaceAll(
          `[attachment":"hanging","direction":3,"toggle_bit":false]`,
          "3"
        )
        .replaceAll(`[attachment":"side","direction":0]`, "0")
        .replaceAll(`[attachment":"side","direction":1]`, "1")
        .replaceAll(`[attachment":"side","direction":2]`, "2")
        .replaceAll(`[attachment":"side","direction":3]`, "3")
        .replaceAll(`[attachment":"standing","direction":0]`, "0")
        .replaceAll(`[attachment":"standing","direction":1]`, "1")
        .replaceAll(
          `[attachment":"standing","direction":2,"toggle_bit":false]`,
          "2"
        )
        .replaceAll(`[attachment":"standing","direction":2]`, "2")
        .replaceAll(
          `[attachment":"standing","direction":3,"toggle_bit":false]`,
          "3"
        )
        .replaceAll(`[attachment":"standing","direction":3]`, "3")
        .replaceAll(
          `[big_dripleaf_head":false,"big_dripleaf_tilt":"none","direction":0]`,
          "0"
        )
        .replaceAll(
          `[big_dripleaf_head":false,"big_dripleaf_tilt":"none","direction":1]`,
          "1"
        )
        .replaceAll(
          `[big_dripleaf_head":false,"big_dripleaf_tilt":"none","direction":2]`,
          "2"
        )
        .replaceAll(
          `[big_dripleaf_head":false,"big_dripleaf_tilt":"none","direction":3]`,
          "3"
        )
        .replaceAll(`[bite_counter":0]`, "0")
        .replaceAll(`[bite_counter":1]`, "1")
        .replaceAll(`[bite_counter":2]`, "2")
        .replaceAll(`[bite_counter":3]`, "3")
        .replaceAll(
          `[brewing_stand_slot_a_bit":false,"brewing_stand_slot_b_bit":false,"brewing_stand_slot_c_bit":false]`,
          "0"
        )
        .replaceAll(`[button_pressed_bit":false,"facing_direction":0]`, "0")
        .replaceAll(`[button_pressed_bit":false,"facing_direction":1]`, "1")
        .replaceAll(`[button_pressed_bit":false,"facing_direction":2]`, "2")
        .replaceAll(`[button_pressed_bit":false,"facing_direction":3]`, "3")
        .replaceAll(`[button_pressed_bit":false,"facing_direction":4]`, "4")
        .replaceAll(`[button_pressed_bit":false,"facing_direction":5]`, "5")
        .replaceAll(`[cluster_count":0,"dead_bit":false]`, "0")
        .replaceAll(`[cluster_count":1,"dead_bit":true]`, "1")
        .replaceAll(`[cluster_count":2,"dead_bit":false]`, "2")
        .replaceAll(`[cluster_count":2,"dead_bit":true]`, "2")
        .replaceAll(`[cluster_count":3,"dead_bit":true]`, "3");
    };
    const Function2 = () => {
      G = F.replaceAll(`[color":"Black"]`, "15")
        .replaceAll(`[color":"Blue"]`, "11")
        .replaceAll(`[color":"Brown"]`, "12")
        .replaceAll(`[color":"Cyan"]`, "9")
        .replaceAll(`[color":"Gray"]`, "7")
        .replaceAll(`[color":"Green"]`, "13")
        .replaceAll(`[color":"LightBlue"]`, "3")
        .replaceAll(`[color":"LightGray"]`, "8")
        .replaceAll(`[color":"light_blue"]`, "3")
        .replaceAll(`[color":"Lime"]`, "5")
        .replaceAll(`[color":"Magenta"]`, "2")
        .replaceAll(`[color":"Orange"]`, "1")
        .replaceAll(`[color":"Pink"]`, "6")
        .replaceAll(`[color":"Purple"]`, "10")
        .replaceAll(`[color":"Red"]`, "14")
        .replaceAll(`[color":"White"]`, "0")
        .replaceAll(`[color":"Yellow"]`, "4")
        .replaceAll(`[composter_fill_level":0]`, "0")
        .replaceAll(`[composter_fill_level":8]`, "8")
        .replaceAll(`[conditional_bit":false,"facing_direction":0]`, "0")
        .replaceAll(`[conditional_bit":false,"facing_direction":1]`, "1")
        .replaceAll(`[conditional_bit":false,"facing_direction":2]`, "2")
        .replaceAll(`[conditional_bit":false,"facing_direction":3]`, "3")
        .replaceAll(`[conditional_bit":false,"facing_direction":4]`, "4")
        .replaceAll(`[conditional_bit":false,"facing_direction":5]`, "5")
        .replaceAll(`[conditional_bit":true,"facing_direction":0]`, "0")
        .replaceAll(`[conditional_bit":true,"facing_direction":1]`, "1")
        .replaceAll(`[conditional_bit":true,"facing_direction":2]`, "2")
        .replaceAll(`[conditional_bit":true,"facing_direction":3]`, "3")
        .replaceAll(`[conditional_bit":true,"facing_direction":4]`, "4")
        .replaceAll(`[conditional_bit":true,"facing_direction":5]`, "5")
        .replaceAll(`[coral_color":"blue","dead_bit":false]`, "0")
        .replaceAll(`[coral_color":"blue","dead_bit":true]`, "0")
        .replaceAll(`[coral_color":"pink","dead_bit":false]`, "1")
        .replaceAll(`[coral_color":"pink","dead_bit":true]`, "1")
        .replaceAll(`[coral_color":"purple","dead_bit":false]`, "2")
        .replaceAll(`[coral_color":"purple","dead_bit":true]`, "2")
        .replaceAll(`[coral_color":"red","dead_bit":false]`, "3")
        .replaceAll(`[coral_color":"red","dead_bit":true]`, "3")
        .replaceAll(`[coral_color":"yellow","dead_bit":false]`, "4")
        .replaceAll(`[covered_bit":false,"height":0]`, "0")
        .replaceAll(`[covered_bit":false,"height":1]`, "1")
        .replaceAll(`[covered_bit":false,"height":2]`, "2")
        .replaceAll(`[covered_bit":false,"height":3]`, "3")
        .replaceAll(`[covered_bit":false,"height":4]`, "4")
        .replaceAll(`[covered_bit":false,"height":5]`, "5")
        .replaceAll(`[covered_bit":false,"height":6]`, "6")
        .replaceAll(`[covered_bit":false,"height":7]`, "7")
        .replaceAll(
          `[cracked_state":"no_cracks","turtle_egg_count":"four_egg"]`,
          "4"
        )
        .replaceAll(
          `[cracked_state":"no_cracks","turtle_egg_count":"one_egg"]`,
          "1"
        )
        .replaceAll(
          `[cracked_state":"no_cracks","turtle_egg_count":"three_egg"]`,
          "3"
        )
        .replaceAll(
          `[cracked_state":"no_cracks","turtle_egg_count":"two_egg"]`,
          "2"
        )
        .replaceAll(`[damage":"broken","direction":0]`, "0")
        .replaceAll(`[damage":"broken","direction":1]`, "1")
        .replaceAll(`[damage":"broken","direction":2]`, "2")
        .replaceAll(`[damage":"broken","direction":3]`, "3")
        .replaceAll(`[damage":"slightly_damaged","direction":0]`, "0")
        .replaceAll(`[damage":"slightly_damaged","direction":1]`, "1")
        .replaceAll(`[damage":"slightly_damaged","direction":2]`, "2")
        .replaceAll(`[damage":"slightly_damaged","direction":3]`, "3")
        .replaceAll(`[damage":"undamaged","direction":0]`, "0")
        .replaceAll(`[damage":"undamaged","direction":1]`, "1")
        .replaceAll(`[damage":"undamaged","direction":2]`, "2")
        .replaceAll(`[damage":"undamaged","direction":3]`, "3")
        .replaceAll(`[damage":"very_damaged","direction":0]`, "0")
        .replaceAll(`[damage":"very_damaged","direction":1]`, "1")
        .replaceAll(`[damage":"very_damaged","direction":2]`, "2")
        .replaceAll(`[damage":"very_damaged","direction":3]`, "3")
        .replaceAll(
          `[direction":0,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "0"
        )
        .replaceAll(
          `[direction":0,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":false]`,
          "0"
        )
        .replaceAll(
          `[direction":0,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "0"
        )
        .replaceAll(`[direction":0,"end_portal_eye_bit":true]`, "0")
        .replaceAll(`[direction":0,"extinguished":false]`, "0")
        .replaceAll(`[direction":0,"extinguished":true]`, "0")
        .replaceAll(
          `[direction":0,"head_piece_bit":true,"occupied_bit":false]`,
          "0"
        )
        .replaceAll(`[direction":0,"honey_level":0]`, "0")
        .replaceAll(`[direction":0,"honey_level":5]`, "0")
        .replaceAll(`[direction":0,"in_wall_bit":false,"open_bit":false]`, "0")
        .replaceAll(`[direction":0,"in_wall_bit":false,"open_bit":true]`, "0")
        .replaceAll(`[direction":0,"in_wall_bit":true,"open_bit":true]`, "0")
        .replaceAll(
          `[direction":0,"open_bit":false,"upside_down_bit":false]`,
          "0"
        )
        .replaceAll(
          `[direction":0,"open_bit":false,"upside_down_bit":true]`,
          "0"
        )
        .replaceAll(
          `[direction":0,"open_bit":true,"upside_down_bit":false]`,
          "0"
        )
        .replaceAll(
          `[direction":0,"open_bit":true,"upside_down_bit":true]`,
          "0"
        )
        .replaceAll(
          `[direction":0,"output_lit_bit":false,"output_subtract_bit":false]`,
          "0"
        )
        .replaceAll(
          `[direction":0,"output_lit_bit":false,"output_subtract_bit":true]`,
          "0"
        )
        .replaceAll(
          `[direction":0,"output_lit_bit":true,"output_subtract_bit":false]`,
          "0"
        )
        .replaceAll(`[direction":0,"powered_bit":false]`, "0")
        .replaceAll(`[direction":0,"repeater_delay":0]`, "0")
        .replaceAll(`[direction":0,"repeater_delay":1]`, "0")
        .replaceAll(`[direction":0,"repeater_delay":2]`, "0")
        .replaceAll(`[direction":0,"repeater_delay":3]`, "0")
        .replaceAll(`[direction":0]`, "0")
        .replaceAll(
          `[direction":1,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "1"
        )
        .replaceAll(
          `[direction":1,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":false]`,
          "1"
        )
        .replaceAll(
          `[direction":1,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "1"
        )
        .replaceAll(
          `[direction":1,"door_hinge_bit":true,"open_bit":true,"upper_block_bit":false]`,
          "1"
        )
        .replaceAll(`[direction":1,"end_portal_eye_bit":false]`, "1")
        .replaceAll(`[direction":1,"end_portal_eye_bit":true]`, "1")
        .replaceAll(`[direction":1,"extinguished":false]`, "1")
        .replaceAll(`[direction":1,"extinguished":true]`, "1")
        .replaceAll(
          `[direction":1,"head_piece_bit":true,"occupied_bit":false]`,
          "1"
        )
        .replaceAll(`[direction":1,"honey_level":0]`, "1")
        .replaceAll(`[direction":1,"in_wall_bit":false,"open_bit":false]`, "1")
        .replaceAll(`[direction":1,"in_wall_bit":false,"open_bit":true]`, "1")
        .replaceAll(`[direction":1,"in_wall_bit":true,"open_bit":true]`, "1")
        .replaceAll(
          `[direction":1,"open_bit":false,"upside_down_bit":false]`,
          "1"
        )
        .replaceAll(
          `[direction":1,"open_bit":false,"upside_down_bit":true]`,
          "1"
        )
        .replaceAll(
          `[direction":1,"open_bit":true,"upside_down_bit":false]`,
          "1"
        )
        .replaceAll(
          `[direction":1,"open_bit":true,"upside_down_bit":true]`,
          "1"
        )
        .replaceAll(
          `[direction":1,"output_lit_bit":false,"output_subtract_bit":false]`,
          "1"
        )
        .replaceAll(
          `[direction":1,"output_lit_bit":true,"output_subtract_bit":false]`,
          "1"
        )
        .replaceAll(`[direction":1,"powered_bit":false]`, "1")
        .replaceAll(`[direction":1,"repeater_delay":0]`, "1")
        .replaceAll(`[direction":1,"repeater_delay":1]`, "1")
        .replaceAll(`[direction":1,"repeater_delay":2]`, "1")
        .replaceAll(`[direction":1,"repeater_delay":3]`, "1")
        .replaceAll(`[direction":1]`, "1")
        .replaceAll(
          `[direction":2,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":false]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "2"
        )
        .replaceAll(`[direction":2,"end_portal_eye_bit":false]`, "2")
        .replaceAll(`[direction":2,"end_portal_eye_bit":true]`, "2")
        .replaceAll(`[direction":2,"extinguished":false]`, "2")
        .replaceAll(`[direction":2,"extinguished":true]`, "2")
        .replaceAll(
          `[direction":2,"head_piece_bit":true,"occupied_bit":false]`,
          "2"
        )
        .replaceAll(`[direction":2,"honey_level":0]`, "2")
        .replaceAll(`[direction":2,"in_wall_bit":false,"open_bit":false]`, "2")
        .replaceAll(`[direction":2,"in_wall_bit":false,"open_bit":true]`, "2")
        .replaceAll(`[direction":2,"in_wall_bit":true,"open_bit":true]`, "2")
        .replaceAll(
          `[direction":2,"open_bit":false,"upside_down_bit":false]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"open_bit":false,"upside_down_bit":true]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"open_bit":true,"upside_down_bit":false]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"open_bit":true,"upside_down_bit":true]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"output_lit_bit":false,"output_subtract_bit":false]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"output_lit_bit":false,"output_subtract_bit":true]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"output_lit_bit":true,"output_subtract_bit":false]`,
          "2"
        )
        .replaceAll(
          `[direction":2,"output_lit_bit":true,"output_subtract_bit":true]`,
          "2"
        )
        .replaceAll(`[direction":2,"powered_bit":false]`, "2")
        .replaceAll(`[direction":2,"repeater_delay":0]`, "2")
        .replaceAll(`[direction":2,"repeater_delay":1]`, "2")
        .replaceAll(`[direction":2,"repeater_delay":2]`, "2")
        .replaceAll(`[direction":2,"repeater_delay":3]`, "2")
        .replaceAll(`[direction":2]`, "2")
        .replaceAll(
          `[direction":3,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "3"
        )
        .replaceAll(
          `[direction":3,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":false]`,
          "3"
        )
        .replaceAll(
          `[direction":3,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "3"
        )
        .replaceAll(
          `[direction":3,"door_hinge_bit":true,"open_bit":true,"upper_block_bit":false]`,
          "3"
        )
        .replaceAll(`[direction":3,"end_portal_eye_bit":false]`, "3")
        .replaceAll(`[direction":3,"end_portal_eye_bit":true]`, "3")
        .replaceAll(`[direction":3,"extinguished":false]`, "3")
        .replaceAll(`[direction":3,"extinguished":true]`, "3")
        .replaceAll(
          `[direction":3,"head_piece_bit":true,"occupied_bit":false]`,
          "3"
        )
        .replaceAll(`[direction":3,"honey_level":0]`, "3")
        .replaceAll(`[direction":3,"in_wall_bit":false,"open_bit":false]`, "3")
        .replaceAll(`[direction":3,"in_wall_bit":false,"open_bit":true]`, "3")
        .replaceAll(`[direction":3,"in_wall_bit":true,"open_bit":true]`, "3")
        .replaceAll(
          `[direction":3,"open_bit":false,"upside_down_bit":false]`,
          "3"
        )
        .replaceAll(
          `[direction":3,"open_bit":false,"upside_down_bit":true]`,
          "3"
        )
        .replaceAll(
          `[direction":3,"open_bit":true,"upside_down_bit":false]`,
          "3"
        )
        .replaceAll(
          `[direction":3,"open_bit":true,"upside_down_bit":true]`,
          "3"
        )
        .replaceAll(
          `[direction":3,"output_lit_bit":false,"output_subtract_bit":false]`,
          "3"
        )
        .replaceAll(
          `[direction":3,"output_lit_bit":true,"output_subtract_bit":false]`,
          "3"
        )
        .replaceAll(`[direction":3,"powered_bit":false]`, "3")
        .replaceAll(`[direction":3,"repeater_delay":0]`, "3")
        .replaceAll(`[direction":3,"repeater_delay":1]`, "3")
        .replaceAll(`[direction":3,"repeater_delay":2]`, "3")
        .replaceAll(`[direction":3,"repeater_delay":3]`, "3")
        .replaceAll(
          `[direction":4,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "4"
        )
        .replaceAll(
          `[direction":4,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "4"
        )
        .replaceAll(`[dirt_type":"coarse"]`, "1")
        .replaceAll(`[dirt_type":"normal"]`, "0")
        .replaceAll(
          `[double_plant_type":"paeonia","upper_block_bit":false"]`,
          "0"
        )
        .replaceAll(`[dripstone_thickness":"frustum","hanging":true]`, "0")
        .replaceAll(`[facing_direction":0,"growth":7]`, "0")
        .replaceAll(`[facing_direction":0,"open_bit":false]`, "0")
        .replaceAll(`[facing_direction":0,"toggle_bit":true]`, "0")
        .replaceAll(`[facing_direction":1,"open_bit":false]`, "1")
        .replaceAll(`[facing_direction":1]`, "1")
        .replaceAll(`[facing_direction":2,"open_bit":false]`, "2")
        .replaceAll(`[facing_direction":2,"toggle_bit":false]`, "2")
        .replaceAll(`[facing_direction":2,"toggle_bit":true]`, "2")
        .replaceAll(`[facing_direction":2,"triggered_bit":false]`, "2")
        .replaceAll(`[facing_direction":2,"triggered_bit":true]`, "2")
        .replaceAll(`[facing_direction":2]`, "2")
        .replaceAll(`[facing_direction":3,"open_bit":false]`, "3")
        .replaceAll(`[facing_direction":3,"toggle_bit":false]`, "3")
        .replaceAll(`[facing_direction":3,"toggle_bit":true]`, "3")
        .replaceAll(`[facing_direction":3]`, "3")
        .replaceAll(`[facing_direction":4,"open_bit":false]`, "4")
        .replaceAll(`[facing_direction":4,"toggle_bit":false]`, "4")
        .replaceAll(`[facing_direction":4,"toggle_bit":true]`, "4")
        .replaceAll(`[facing_direction":4]`, "4")
        .replaceAll(`[facing_direction":5,"open_bit":false]`, "5")
        .replaceAll(`[facing_direction":5,"toggle_bit":false]`, "5")
        .replaceAll(`[facing_direction":5,"toggle_bit":true]`, "5")
        .replaceAll(`[facing_direction":5]`, "5")
        .replaceAll(`[facing_direction":6]`, "6")
        .replaceAll(`[ground_sign_direction":0]`, "0")
        .replaceAll(`[growth":0]`, "0")
        .replaceAll(`[growth":1]`, "1")
        .replaceAll(`[growth":2]`, "2")
        .replaceAll(`[growth":3]`, "3")
        .replaceAll(`[growth":4]`, "4")
        .replaceAll(`[growth":5]`, "5")
        .replaceAll(`[growth":6]`, "6")
        .replaceAll(`[growth":7]`, "7")
        .replaceAll(`[infiniburn_bit":false]`, "0")
        .replaceAll(`[kelp_age":0]`, "0")
        .replaceAll(`[kelp_age":10]`, "10")
        .replaceAll(`[kelp_age":11]`, "11")
        .replaceAll(`[kelp_age":12]`, "12")
        .replaceAll(`[kelp_age":13]`, "13")
        .replaceAll(`[kelp_age":14]`, "14")
        .replaceAll(`[kelp_age":15]`, "15")
        .replaceAll(`[kelp_age":16]`, "16")
        .replaceAll(`[kelp_age":17]`, "17")
        .replaceAll(`[kelp_age":18]`, "18")
        .replaceAll(`[kelp_age":19]`, "19")
        .replaceAll(`[kelp_age":1]`, "1")
        .replaceAll(`[kelp_age":20]`, "20")
        .replaceAll(`[kelp_age":21]`, "21")
        .replaceAll(`[kelp_age":22]`, "22")
        .replaceAll(`[kelp_age":23]`, "23")
        .replaceAll(`[kelp_age":24]`, "24")
        .replaceAll(`[kelp_age":25]`, "25")
        .replaceAll(`[kelp_age":2]`, "2")
        .replaceAll(`[kelp_age":3]`, "3")
        .replaceAll(`[kelp_age":4]`, "4")
        .replaceAll(`[kelp_age":5]`, "5")
        .replaceAll(`[kelp_age":6]`, "6")
        .replaceAll(`[kelp_age":7]`, "7")
        .replaceAll(`[kelp_age":8]`, "8")
        .replaceAll(`[kelp_age":9]`, "9")
        .replaceAll(`[liquid_depth":0]`, "0")
        .replaceAll(`[liquid_depth":10]`, "10")
        .replaceAll(`[liquid_depth":11]`, "11")
        .replaceAll(`[liquid_depth":12]`, "12")
        .replaceAll(`[liquid_depth":13]`, "13")
        .replaceAll(`[liquid_depth":14]`, "14")
        .replaceAll(`[liquid_depth":15]`, "15")
        .replaceAll(`[liquid_depth":1]`, "1")
        .replaceAll(`[liquid_depth":2]`, "2")
        .replaceAll(`[liquid_depth":3]`, "3")
        .replaceAll(`[liquid_depth":4]`, "4")
        .replaceAll(`[liquid_depth":5]`, "5")
        .replaceAll(`[liquid_depth":6]`, "6")
        .replaceAll(`[liquid_depth":7]`, "7")
        .replaceAll(`[liquid_depth":8]`, "8")
        .replaceAll(`[liquid_depth":9]`, "9")
        .replaceAll(`[moisture":0]`, "0")
        .replaceAll(`[moisture":1]`, "1")
        .replaceAll(`[moisture":2]`, "2")
        .replaceAll(`[moisture":3]`, "3")
        .replaceAll(`[moisture":4]`, "4")
        .replaceAll(`[moisture":5]`, "5")
        .replaceAll(`[moisture":6]`, "6")
        .replaceAll(`[moisture":7]`, "7")
        .replaceAll(`[moisturized_amount":0]`, "0")
        .replaceAll(`[moisturized_amount":1]`, "1")
        .replaceAll(`[moisturized_amount":2]`, "2")
        .replaceAll(`[moisturized_amount":3]`, "3")
        .replaceAll(`[moisturized_amount":4]`, "4")
        .replaceAll(`[moisturized_amount":5]`, "5")
        .replaceAll(`[moisturized_amount":6]`, "6")
        .replaceAll(`[moisturized_amount":7]`, "7")
        .replaceAll(`[monster_egg_stone_type":"stone"]`, "0");
      console.log("Function 2");
    };
    const Function3 = () => {
      H = G.replaceAll(
        `[new_leaf_type":"acacia","persistent_bit":false,"update_bit":false]`,
        "3"
      )
        .replaceAll(
          `[new_leaf_type":"acacia","persistent_bit":false,"update_bit":true]`,
          "3"
        )
        .replaceAll(
          `[new_leaf_type":"acacia","persistent_bit":true,"update_bit":false]`,
          "3"
        )
        .replaceAll(
          `[new_leaf_type":"acacia","persistent_bit":true,"update_bit":true]`,
          "3"
        )
        .replaceAll(
          `[new_leaf_type":"dark_oak","persistent_bit":true,"update_bit":false]`,
          "1"
        )
        .replaceAll(`[new_log_type":"acacia","pillar_axis":"y"]`, "0")
        .replaceAll(`[new_log_type":"acacia","pillar_axis":"z"]`, "3")
        .replaceAll(`[new_log_type":"dark_oak","pillar_axis":"x"]`, "1")
        .replaceAll(`[new_log_type":"dark_oak","pillar_axis":"y"]`, "1")
        .replaceAll(`[new_log_type":"dark_oak","pillar_axis":"z"]`, "1")
        .replaceAll(
          `[old_leaf_type":"oak","persistent_bit":false,"update_bit":true]`,
          "0"
        )
        .replaceAll(`[persistent_bit":true,"update_bit":false]`, "0")
        .replaceAll(`[pillar_axis":"x"]`, "1")
        .replaceAll(`[pillar_axis":"z"]`, "2")
        .replaceAll(`[portal_axis":"unknown"]`, "0")
        .replaceAll(`[portal_axis":"x"]`, "1")
        .replaceAll(`[portal_axis":"z"]`, "2")
        .replaceAll(`[prismarine_block_type":"bricks"]`, "2")
        .replaceAll(`[prismarine_block_type":"dark"]`, "1")
        .replaceAll(`[prismarine_block_type":"default"]`, "0")
        .replaceAll(`[rail_data_bit":false,"rail_direction":1]`, "1")
        .replaceAll(`[rail_direction":0]`, "0")
        .replaceAll(`[rail_direction":1]`, "1")
        .replaceAll(`[rail_direction":2]`, "2")
        .replaceAll(`[rail_direction":3]`, "3")
        .replaceAll(`[rail_direction":4]`, "4")
        .replaceAll(`[rail_direction":5]`, "5")
        .replaceAll(`[rail_direction":6]`, "6")
        .replaceAll(`[rail_direction":7]`, "7")
        .replaceAll(`[rail_direction":8]`, "8")
        .replaceAll(`[rail_direction":9]`, "9")
        .replaceAll(`[redstone_signal":0]`, "0")
        .replaceAll(`[redstone_signal":10]`, "10")
        .replaceAll(`[redstone_signal":11]`, "11")
        .replaceAll(`[redstone_signal":12]`, "12")
        .replaceAll(`[redstone_signal":13]`, "13")
        .replaceAll(`[redstone_signal":14]`, "14")
        .replaceAll(`[redstone_signal":15]`, "15")
        .replaceAll(`[redstone_signal":1]`, "1")
        .replaceAll(`[redstone_signal":2]`, "2")
        .replaceAll(`[redstone_signal":3]`, "3")
        .replaceAll(`[redstone_signal":4]`, "4")
        .replaceAll(`[redstone_signal":5]`, "5")
        .replaceAll(`[redstone_signal":6]`, "6")
        .replaceAll(`[redstone_signal":7]`, "7")
        .replaceAll(`[redstone_signal":8]`, "8")
        .replaceAll(`[redstone_signal":9]`, "9")
        .replaceAll(`[sand_stone_type":"cut"]`, "2")
        .replaceAll(`[sand_stone_type":"default"]`, "0")
        .replaceAll(`[sand_stone_type":"heiroglyphs"]`, "1")
        .replaceAll(`[sand_stone_type":"smooth"]`, "3")
        .replaceAll(`[sponge_type":"dry"]`, "0")
        .replaceAll(`[sponge_type":"wet"]`, "1")
        .replaceAll(`[stone_slab_type":"brick","top_slot_bit":false]`, "4")
        .replaceAll(`[stone_slab_type":"brick","top_slot_bit":true]`, "12")
        .replaceAll(
          `[stone_slab_type":"cobblestone","top_slot_bit":false]`,
          "3"
        )
        .replaceAll(
          `[stone_slab_type":"cobblestone","top_slot_bit":true]`,
          "11"
        )
        .replaceAll(
          `[stone_slab_type":"nether_brick","top_slot_bit":false]`,
          "7"
        )
        .replaceAll(
          `[stone_slab_type":"nether_brick","top_slot_bit":true]`,
          "15"
        )
        .replaceAll(`[stone_slab_type":"quartz","top_slot_bit":false]`, "6")
        .replaceAll(`[stone_slab_type":"quartz","top_slot_bit":true]`, "14")
        .replaceAll(`[stone_slab_type":"sandstone","top_slot_bit":false]`, "1")
        .replaceAll(`[stone_slab_type":"sandstone","top_slot_bit":true]`, "9")
        .replaceAll(
          `[stone_slab_type":"smooth_stone","top_slot_bit":false]`,
          "0"
        )
        .replaceAll(
          `[stone_slab_type":"smooth_stone","top_slot_bit":true]`,
          "8"
        )
        .replaceAll(
          `[stone_slab_type":"stone_brick","top_slot_bit":false]`,
          "5"
        )
        .replaceAll(
          `[stone_slab_type":"stone_brick","top_slot_bit":true]`,
          "13"
        )
        .replaceAll(`[stone_slab_type":"wood","top_slot_bit":false]`, "0")
        .replaceAll(`[stone_slab_type":"wood","top_slot_bit":true]`, "5")
        .replaceAll(
          `[stone_slab_type":"wooden_slab","top_slot_bit":false]`,
          "2"
        )
        .replaceAll(
          `[stone_slab_type":"wooden_slab","top_slot_bit":true]`,
          "10"
        )
        .replaceAll(
          `[stone_slab_type_4":"mossy_stone_brick","top_slot_bit":false]`,
          "0"
        )
        .replaceAll(
          `[stone_slab_type_4":"smooth_quartz","top_slot_bit":false]`,
          "1"
        )
        .replaceAll(`[stone_type":"andesite"]`, "5")
        .replaceAll(`[stone_type":"andesite_smooth"]`, "6")
        .replaceAll(`[stone_type":"diorite"]`, "3")
        .replaceAll(`[stone_type":"diorite_smooth"]`, "4")
        .replaceAll(`[stone_type":"granite"]`, "1")
        .replaceAll(`[stone_type":"granite_smooth"]`, "2")
        .replaceAll(`[stone_type":"stone"]`, "0")
        .replaceAll(`[tall_grass_type":"default"]`, "0")
        .replaceAll(`[tall_grass_type":"fern"]`, "2")
        .replaceAll(`[tall_grass_type":"snow"]`, "3")
        .replaceAll(`[tall_grass_type":"tall"]`, "1")
        .replaceAll(`[top_slot_bit":false,"wood_type":"acacia"]`, "4")
        .replaceAll(`[top_slot_bit":false,"wood_type":"birch"]`, "2")
        .replaceAll(`[top_slot_bit":false,"wood_type":"jungle"]`, "3")
        .replaceAll(`[top_slot_bit":false,"wood_type":"oak"]`, "0")
        .replaceAll(`[top_slot_bit":false,"wood_type":"spruce"]`, "1")
        .replaceAll(`[top_slot_bit":true,"wood_type":"acacia"]`, "12")
        .replaceAll(`[top_slot_bit":true,"wood_type":"birch"]`, "10")
        .replaceAll(`[top_slot_bit":true,"wood_type":"jungle"]`, "11")
        .replaceAll(`[top_slot_bit":true,"wood_type":"oak"]`, "8")
        .replaceAll(`[top_slot_bit":true,"wood_type":"spruce"]`, "9")
        .replaceAll(`[top_slot_bit":true]`, "0")
        .replaceAll(`[torch_facing_direction":"east"]`, "2")
        .replaceAll(`[torch_facing_direction":"north"]`, "3")
        .replaceAll(`[torch_facing_direction":"south"]`, "4")
        .replaceAll(`[torch_facing_direction":"top"]`, "5")
        .replaceAll(`[torch_facing_direction":"unknown"]`, "0")
        .replaceAll(`[torch_facing_direction":"west"]`, "1")
        .replaceAll(`[upside_down_bit":false,"weirdo_direction":0]`, "0")
        .replaceAll(`[upside_down_bit":false,"weirdo_direction":1]`, "1")
        .replaceAll(`[upside_down_bit":false,"weirdo_direction":2]`, "2")
        .replaceAll(`[upside_down_bit":false,"weirdo_direction":3]`, "3")
        .replaceAll(`[upside_down_bit":true,"weirdo_direction":0]`, "4")
        .replaceAll(`[upside_down_bit":true,"weirdo_direction":1]`, "5")
        .replaceAll(`[upside_down_bit":true,"weirdo_direction":2]`, "6")
        .replaceAll(`[upside_down_bit":true,"weirdo_direction":3]`, "7")
        .replaceAll(`[vine_direction_bits":0]`, "0")
        .replaceAll(`[vine_direction_bits":10]`, "10")
        .replaceAll(`[vine_direction_bits":11]`, "11")
        .replaceAll(`[vine_direction_bits":12]`, "12")
        .replaceAll(`[vine_direction_bits":13]`, "13")
        .replaceAll(`[vine_direction_bits":14]`, "14")
        .replaceAll(`[vine_direction_bits":15]`, "15")
        .replaceAll(`[vine_direction_bits":1]`, "1")
        .replaceAll(`[vine_direction_bits":2]`, "2")
        .replaceAll(`[vine_direction_bits":3]`, "3")
        .replaceAll(`[vine_direction_bits":4]`, "4")
        .replaceAll(`[vine_direction_bits":5]`, "5")
        .replaceAll(`[vine_direction_bits":6]`, "6")
        .replaceAll(`[vine_direction_bits":7]`, "7")
        .replaceAll(`[vine_direction_bits":8]`, "8")
        .replaceAll(`[vine_direction_bits":9]`, "9")

        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"andesite","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `[wall_block_type":"brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "6"
        )
        .replaceAll(
          `[wall_block_type":"brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "6"
        )
        .replaceAll(
          `[wall_block_type":"brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "6"
        )
        .replaceAll(
          `[wall_block_type":"brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "6"
        )
        .replaceAll(
          `[wall_block_type":"brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "6"
        )
        .replaceAll(
          `[wall_block_type":"brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "6"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"shor","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"short","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"diorite","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `[wall_block_type":"end_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "10"
        )
        .replaceAll(
          `[wall_block_type":"end_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "10"
        )
        .replaceAll(
          `[wall_block_type":"end_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "10"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `[wall_block_type":"mossy_stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "8"
        )
        .replaceAll(
          `[wall_block_type":"mossy_stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "8"
        )
        .replaceAll(
          `[wall_block_type":"mossy_stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "8"
        )
        .replaceAll(
          `[wall_block_type":"mossy_stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "8"
        )
        .replaceAll(
          `[wall_block_type":"mossy_stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "8"
        )
        .replaceAll(
          `[wall_block_type":"mossy_stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "8"
        )
        .replaceAll(
          `[wall_block_type":"mossy_stone_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "8"
        )
        .replaceAll(
          `[wall_block_type":"mossy_stone_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "8"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"short","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "11"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":false]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"red_sandstone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "12"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "6"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7	"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_block_type":"stone_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `[wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(`[weeping_vines_age":25]`, "25")
        .replaceAll(`[weirdo_direction":0]`, "0")
        .replaceAll(`[weirdo_direction":1]`, "1")
        .replaceAll(`[weirdo_direction":2]`, "2")
        .replaceAll(`[weirdo_direction":3]`, "3")
        .replaceAll(`[wood_type":"acacia"]`, "4")
        .replaceAll(`[wood_type":"birch"]`, "2")
        .replaceAll(`[wood_type":"dark_oak"]`, "5")
        .replaceAll(`[wood_type":"jungle"]`, "3")
        .replaceAll(`[wood_type":"oak"]`, "0")
        .replaceAll(`[wood_type":"spruce"]`, "1")
        .replaceAll(`["wood_type":"oak"]`, "0")
        .replaceAll(`["wood_type":"spruce"]`, "1")
        .replaceAll(`["wood_type":"birch"]`, "2")
        .replaceAll(`["wood_type":"jungle"]`, "3")
        .replaceAll(`["wood_type":"acacia"]`, "4")
        .replaceAll(`["wood_type":"dark_oak"]`, "5")
        .replaceAll(
          `["wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        );
      console.log("Function 3");
    };

    Function1();
    Function2();
    Function3();
    props.contentOutputTargetRef.current.value = H;
    props.contentOutputTargetHoldDataRef.current.value = H; 
    props.downloadFile();
  };

  return (
    <button className="green" onClick={FileProcessTwo}>
      Step Two
    </button>
  );
};
export default FileOutPutButtonTwo;
