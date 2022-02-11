
        jQuery(".elementor-menu-toggle").click(function(e) {
        var menuItem = jQuery(this);

          if(menuItem.attr("aria-expanded") === "true"){
            jQuery(".elementor-menu-toggle__icon--open").css("display", "block");
          }
          else if(menuItem.attr("aria-expanded") === "false"){
            jQuery(".elementor-menu-toggle__icon--open").css("display", "none");
          }
        });
