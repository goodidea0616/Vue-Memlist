<template>
  <div>
    <h5 class="mb-8">Välj medlemskap</h5>

    <div class="mb-8">
     
    <template v-for="(shopitem, j) in memberships">
      <b-card v-bind:key="j" v-if="renderItem(shopitem.rules)">
        <b-row style="min-height: 100px; border: 1px solid #E4E6EF;">
          <b-col lg="1" style=" background-color: #F3F6F9;">
            <div class="mt-12 ml-4 d-flex justify-content">
              <label class="radio radio-outline radio-outline-2x radio-primary">
                <input
                  type="radio"
                  v-model="selected_membership"
                  v-bind:name="shopitem.group"
                  v-bind:value="shopitem.shop_item_id"
                >
                <span class='mr-2'></span>
              </label>
            </div>
          </b-col>
          <b-col class="pt-4" lg="10">
            <b-row>
              <b-col lg="10">
                <h5>{{ shopitem.name }}</h5>
              </b-col>
              <b-col lg="2">
                <h5>{{ shopitem.price_sek }} kr</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <p>{{ shopitem.descr }}</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </template>
    </div>

    <div v-if="extras.length > 0">
      <h5 class="mb-8">Exklusiva medlemserbjudanden</h5>
      <template v-for="(shopitem, j) in extras">
        <ShopExtraItem
          v-bind:key="j"
          v-if="renderItem(shopitem.rules)"
          :shopitem="shopitem"
          ref="shopItemRow"
          @removeShopItem="removeShopItem"
          @addShopItem="addShopItem"
        />
      </template>
    </div>

    <div v-if="cart.length > 0">
      <ShopCartTable
        :total_price="total_price"
        :total_vat="total_vat"
        :cart="cart"
        @deleteItemClicked="deleteItemClicked"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox > span {
  background-color: white;
  border: 1px solid #ddd;
}

.price {
  color: #646c9a;
  font-weight: 600;
}

.hdr {
  font-weight: bold;
}

</style>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import ShopExtraItem from '@/view/pages/members/register/registerwizard/ShopExtraItem.vue';
import ShopCartTable from '@/view/pages/members/register/registerwizard/ShopCartTable.vue';
import ShopCartTable from '@/view/pages/members/register/registerwizard/ShopMembershipSelect.vue';

export default {
  name: 'register-shop-page',
  props: ['memberships', 'extras', 'page', 'age'],
  components: {
    ShopExtraItem,
    ShopCartTable,
    ShopMembershipSelect
  },
  computed: {
    renderItem(){
      return rules => {
        if (rules !== null && rules !== undefined)
          return rules.age_min < this.age && this.age < rules.age_max;
        else
          return true;

      }
    },
  },
  data() {
    return {
      form: {},
      selected_membership: null,
      total_price: 0,
      total_vat: 0,
      cart: []
    };
  },
  mounted() {
    console.log('Detected Age', this.age)
    this.$emit('isValid', this.memberships === null || this.memberships === undefined || this.memberships.length === 0, this.page.id)
  },
  watch: {
    selected_membership(newValue, oldValue) {

      var found = false;

      for (var i = 0; i < this.cart.length; ++i) {
        if (this.cart[i].is_membership) {
            this.cart[i] = this.getItem(newValue);
            this.cart[i].is_membership = true;
            found = true;
            break;
        }
      }

      if (!found) {
        var item = this.getItem(newValue);
        item.quantity = 1;
        item.is_membership = true;
        this.cart.push(item);
      }

      this.$emit('membershipClicked', newValue);

      this.calcTotals();

      this.form.selected_membership = newValue;

      this.$emit('isValid', true, this.page.id);
    },
  },
  methods: {
    getData() {
      console.log('Shop Page', this.form)
      if (this.form.cart){
        const shop_items = this.form.cart.map(item => {
          return {shop_item_id: item.shop_item_id, quantity: item.quantity};
        });
        return {shop_items: shop_items};
      }
    },
    calcTotals() {
      this.total_price = 0;
      this.total_vat = 0;

      for (var i = 0; i < this.cart.length; ++i) {
        this.total_price += this.cart[i].price_sek;
        this.total_vat += this.cart[i].vat_sek;
      }

      if (this.total_price > 0) {
        this.form.mustpay = true;
      }
      else {
        this.form.mustpay = false;
      }

      this.form.total_price = this.total_price;
      this.form.total_vat = this.total_vat;
      this.form.cart = this.cart;

      this.$emit('shopItemsUpdated', { cart: this.cart, total_price: this.total_price, total_vat: this.total_vat });
    },
    removeShopItem(shop_item_id) {
      for (var i = 0; i < this.cart.length; ++i) {
        if (this.cart[i].shop_item_id === shop_item_id) {
          this.cart[i].quantity--;

          if (this.cart[i].quantity === 0) {
            this.cart.splice(i, 1);
            break;
          }
          else {
            this.cart[i].price_sek = this.cart[i].quantity * this.cart[i].p_pi_sek;
            this.cart[i].vat_sek = this.cart[i].quantity * this.cart[i].v_pi_sek;
          }
        }
      }

      this.calcTotals();
    },
    getItem(shop_item_id) {
      for (var i = 0; i < this.memberships.length; ++i) {
        if (this.memberships[i].shop_item_id === shop_item_id) {
          return this.memberships[i];
        }
      }

      for (var i = 0; i < this.extras.length; ++i) {
        if (this.extras[i].shop_item_id === shop_item_id) {
          return this.extras[i];
        }
      }

      return null;
    },
    getPriceForItem(shop_item_id) {
      return this.getItem(shop_item_id).price_sek;
    },
    getVatForItem(shop_item_id) {
      return this.getItem(shop_item_id).vat_sek;
    },
    addShopItem(shop_item_id) {
      var found = false;
      for (var i = 0; i < this.cart.length; ++i) {
        if (this.cart[i].shop_item_id === shop_item_id) {
          this.cart[i].quantity++;
          this.cart[i].price_sek = this.cart[i].quantity * this.cart[i].p_pi_sek;
          this.cart[i].vat_sek = this.cart[i].quantity * this.cart[i].v_pi_sek;
          found = true;
          break;
        }
      }

      if (!found) {
        var item = this.getItem(shop_item_id);

        this.cart.push({ name: item.name, shop_item_id: shop_item_id, quantity: 1, price_sek: item.price_sek, vat_sek: item.vat_sek, p_pi_sek: item.price_sek, v_pi_sek: item.vat_sek, is_membership: false });
      }

      this.calcTotals();
    },
    deleteItemClicked(shop_item_id) {
      for (var i = 0; i < this.cart.length; ++i) {
        if (this.cart[i].shop_item_id === shop_item_id) {
          this.cart.splice(i, 1);
          break;
        }
      }

      for (var i = 0; i < this.extras.length; ++i) {
        if (this.extras[i].shop_item_id === shop_item_id) {
          this.$refs.shopItemRow[i].clear();
          break;
        }
      }

      this.calcTotals();
    },
    toastr(type, title, message) {
      this.$bvToast.toast(message, {
        title: title,
        autoHideDelay: 2000,
        appendToast: true,
        variant: type
      });
    }
  }
};
</script>
