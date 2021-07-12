<template>
  <v-container class="text-center">
    <v-card
      elevation="3"
      :style="{ background: $vuetify.theme.themes['light'].header }"
    >
      <v-card-title>BillyJack</v-card-title>
      <v-card-subtitle class="text-center">
        When policemen break the Law then there isn't any Law...just a fight
        for survival.
      </v-card-subtitle>
      <v-img
        :src="require('../assets/BillyJack.png')"
        class="text-center"
        contain
        width="100%"
      />
    </v-card>
    <v-row justify="center">
      <v-dialog :absolute="absolute" :value="billyOverlay" class="ma4-m pa2-m">
        <v-card
          elevation="6"
          class="rounded-xl pa-md-4 mx-md-auto"
          :style="{ background: $vuetify.theme.themes['light'].overlay }"
          :min-height="$vuetify.breakpoint.xs ? 300 : '10vh'"
          :min-width="$vuetify.breakpoint.xs ? 300 : '10vh'"
          :rounded="$vuetify.breakpoint.xsOnly"
        >
          <v-card-title>Why Billy Jack?</v-card-title>
          <v-card-subtitle class="text-center">
            High Art as the genesis of civilization.
          </v-card-subtitle>
          <v-card-text>
            <p>
              The first film that I can remember seeing as a child was Billy
              Jack. The opening sequences of the film where wild horses are
              being herded towards slaughter to the triumphal lyrics and rousing
              melody of ONE TIN SOLDIER by the band Coven are indelibly etched
              upon my memory. When the Indian lawman Billy Jack confronts the
              horse rustlers who have stolen onto Native American land in order
              to slaughter horses for their meat it was the very epitome of a
              hero in my young eyes. Billy Jack fought for an end to racism and
              senseless crimes based upon race, religion or creed. He protected
              students who came to a school to be free of abuse at home,
              guarding a sanctuary where the young could choose to be free to
              create and explore their God-given talents without judgement or
              recrimination.
            </p>
            <p>
              Tom Laughlin wrote the script for Billy Jack after witnessing
              police brutality against Native Americans, who in the film are
              referred to as "Indians", though they never once stepped foot upon
              the sub-continent of India. The film to me is a chrysalis housing
              an increasingly archaic view of what it meant to be American. It
              crystallizes for display those values which as a youth I cherished
              and whose compounding loss in our modern age of Technocracy and
              National Security statism I bemoan daily. Billy Jack is a plea to
              the world at large to uphold again those inherently human values
              of Life, Liberty and the Pursuit of Happiness without which we are
              merely existing.
            </p>
            <p>
              Art is an expression of consciousness intended to raise in the
              viewer contemplation, outrage, joy or ecstasy. High art should
              prompt the user to question their society and to see the
              possibilities of reality in endless variety. High art is capable
              of changing the consciousness of the viewer or of changing the
              very civilizations which cause artists to come into being.
            </p>
            <p>
              As a final disclaimer, this artwork is not intended as an attack
              upon all police. I bear no ill will towards men and women who seek
              to uphold the Law and to ensure the blessings of our individual
              Liberties to all. It is only <em>when</em> "policemen break the
              Law" that the Law itself ceases to exist. In recent years we have
              seen ever escalating violations of personal Liberties and privacy,
              invariably by those who are meant to uphold those sacred Rights
              upon which all other Rights depend. To those who uphold the Law,
              may you always know that yours is the most important of callings.
              To those who break the Law in the name of temporary security or
              evanescent threats, may you learn that the cost of such actions
              fall not alone upon your victims but ultimately upon you
              yourselves who place the shackles of tyranny around all of the
              People equally.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="billyOverlay = false"
              >Hide Why Billy Jack?</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog :absolute="absolute" :value="murallOverlay" class="ma4-m pa2-m">
        <v-card
          elevation="6"
          class="rounded-xl pa-md-4 mx-lg-auto"
          :style="{ background: $vuetify.theme.themes['light'].overlay }"
          :min-height="$vuetify.breakpoint.xs ? 300 : '10vh'"
          :min-width="$vuetify.breakpoint.xs ? 300 : '10vh'"
          :rounded="$vuetify.breakpoint.xsOnly"
        >
          <v-card-title>Why Murall?</v-card-title>
          <v-card-subtitle class="text-center">
            Decentralization as the genesis of a new civilization.
          </v-card-subtitle>
          <v-card-text>
            <p>
              The Murall.art project represent a revolutionary tokenization of
              artwork leveraging a truly decentralized mechanism to perpetually
              record upon the Ethereum and Polygon blockchains artwork that is
              truly free of censorship.
            </p>
            <p>
              True art has always belonged to those who see a message that must
              be conveyed to the future generations. These messages can be
              celebratory, laudatory, or cautionary. They can be lyrical
              explosions of form and beauty, delineating Truth or Beauty in
              stark lines or ceaseless chiaroscuro. Or these messages can be
              grim warnings, to any who will listen, of the dangers that every
              civilization must face in coming to grips with its past and in
              contemplating its future.
            </p>
            <p>
              I chose the Murall.art project as the canvas upon which to pay
              homage to the Billy Jack films and their seminal message because
              the project is truly a quantum leap in evolution of high art. I
              want to thank the creators of Murall and to applaud them for their
              insight and vision as well as their diligence in realizing a truly
              future-proof solution to the questions surrounding the
              impermanence of art and the endurance of the messages that all High
              Art is intended to convey.
            </p>
            <p>
              The Murall project also mints NFTs [non-fungible tokens] from the
              Murall canvas. These are unique, one-of-a-kind tokens that
              represents ownership of the underlying blockchain tokenization of
              the canvas art. Billy Jack is, to the creator's best possible
              knowledge, the first self-minted complete Murall canvas by any
              artist. This is an honor and a privilege. The Billy Jack NFT is
              not currently for sale but will become available for sale at some
              point in the future and proceeds will be used to fund further art
              work based upon this landmark film.
            </p>
            <p>
              To those who have shared your messages to the Murall, I thank you.
              To those who have not yet shared a message...what in the World are
              you waiting for?!
            </p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="success" @click="murallOverlay = false"
              >Hide Why Murall?</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-btn
        color="success"
        class="mt-12"
        @click="billyOverlay = !billyOverlay"
      >
        Why Billy Jack?
      </v-btn>
      <v-btn
        color="success"
        class="mt-12 ml-4"
        @click="murallOverlay = !murallOverlay"
      >
        Why Murall?
      </v-btn>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BillyJack",
  computed: {
    height() {
      console.log(this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
        default:
          return 800;
      }
    },
    width() {
      console.log(this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 400;
        case "sm":
          return 600;
        case "md":
          return 700;
        case "lg":
          return 800;
        case "xl":
          return 900;
        default:
          return 900;
      }
    },
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
  data: () => ({
    billyOverlay: false,
    murallOverlay: false,
    importantLinks: [
      {
        text: "The Movie",
        href: "https://billyjack.com/",
      },
      {
        text: "One Tin Soldier",
        href: "https://www.youtube.com/watch?v=aaqLRS81XtY",
      },
      {
        text: "When policement break the Law...",
        href: "https://www.youtube.com/watch?v=kttCi2jOcOo",
      },
      {
        text: "I just go beserk",
        href: "https://www.youtube.com/watch?v=dnmDhuuPrJc",
      },
      {
        text: "Hapkido",
        href: "https://www.youtube.com/watch?v=fLbpxbvs4mw",
      },
    ],
  }),
};
</script>
