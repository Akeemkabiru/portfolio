"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" fixed w-full bg-white border-b py-4">
        {" "}
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p> K. Akeem</p>
          <div className="flex items-center gap-4">
            <Link href="" className="uppercase">
              systems
            </Link>
            <Link href="" className="uppercase">
              biochemistry
            </Link>
            <Link href="" className="uppercase">
              about
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="py-24">
          <p className="font-bold text-6xl">Kabiru Akeem</p>
          <p className="text-2xl">
            Systems engineer building high-performance infrastructure and
            computational systems for molecular science.
          </p>
        </div>

        <div>
          <p>Areas of Focus</p>
          <div>
            <p>Systems Engineering</p>
            <p>
              Golang, Rust, distributed systems, infrastructure, and
              correctness-focused backend development.
            </p>
          </div>

          <div>
            <p>Computational Biochemistry</p>
            <p>
              Structure-based drug design, molecular dynamics simulation, and
              computational vaccine development.
            </p>
          </div>
        </div>

        <div>
          <p>Systems Engineering</p>
          <p>Building Correct, Performant Systems</p>
          <p>
            My approach to systems design prioritizes correctness over
            cleverness, explicit tradeoffs over hidden complexity, and measured
            performance over speculative optimization. Systems should fail
            predictably and recover gracefully. Every abstraction must earn its
            place through demonstrable benefit.
          </p>
        </div>

        <div>
          <p>Selected Projects</p>
          <p>Distributed Task Orchestration Engine</p>

          <div>
            <h3>Problem Context</h3>
            <p>
              Coordinating long-running, failure-prone computational workloads
              across heterogeneous infrastructure with strict consistency
              requirements for resource accounting.
            </p>
          </div>
          <div>
            <p>Technical Constraints </p>
            <p> — Leader election with sub-second failover </p>
            <p> — At-least-once delivery with idempotent task execution </p>
            <p>— Graceful degradation during partial cluster failures </p>
            <p> — Full observability without significant overhead</p>
          </div>
          <div>
            <p>Design Decisions</p>
            <p>
              Implemented Raft-based leader election isolated from the
              scheduling hot path. Task state uses event sourcing for
              auditability and replay. Worker heartbeats with exponential
              backoff handle transient failures. Structured logging with
              correlation IDs enables distributed tracing.
            </p>
          </div>
          <div>
            <p> Tradeoffs</p>
            <p>
              Chose strong consistency for task assignment over higher
              throughput. Accepted higher memory usage for in-memory task queues
              to achieve lower scheduling latency. Event sourcing adds storage
              overhead but eliminates state reconciliation complexity.
            </p>
          </div>
          <div>
            <p>Outcomes </p>
            <p>
              Achieved 12ms median scheduling latency under load. Zero task loss
              over 14 months of production use. Mean time to recovery from
              leader failure: 2.3 seconds.
            </p>
          </div>
        </div>

        <div>
          <p>Computational Biochemistry</p>
          <p> Molecular Discovery Through Computation</p>
          <p>
            I apply computational methods to understand molecular systems with
            therapeutic relevance. My work emphasizes methodological rigor,
            reproducibility, and honest assessment of computational limitations.
            Every prediction should be accompanied by uncertainty quantification
            and validation strategy.
          </p>
          <p>
            <span className="font-semibold"> Research domains:</span>{" "}
            Structure-based drug design · Molecular dynamics simulation ·
            Vaccine design
          </p>
        </div>

        <div>
          <p>Selected Publications</p>
          <div>
            <div className="flex items-center justify-between">
              <p>
                Cryptic Allosteric Site Discovery in Type II Kinase Inhibitors
                via Adaptive Sampling Molecular Dynamics
              </p>
              <p>Published</p>
            </div>
            <p>Chen, A., et al.</p>
            <p>
              We developed an adaptive sampling protocol to identify cryptic
              allosteric pockets in kinase domains not visible in
              crystallographic structures. Markov State Model analysis of 150μs
              aggregate simulation time revealed three metastable conformational
              states with novel pocket formations. Subsequent ensemble docking
              and free energy perturbation calculations validated binding
              feasibility. Experimental fragment screening confirmed two
              predicted sites with measurable SPR binding affinities.
            </p>
          </div>
        </div>

        <div>
          <p> Intersection</p>

          <div>
            <p>Computational Infrastructure for Molecular Science</p>
            <p>
              The most impactful work happens when systems engineering serves
              scientific discovery directly. I build computational
              infrastructure designed for the unique requirements of molecular
              simulation—systems that understand the difference between a failed
              job and a scientifically meaningful negative result.
            </p>
          </div>

          <div>
            <p>Scalable Simulation Orchestration</p>{" "}
            <p>
              Job schedulers that understand molecular dynamics workflows:
              intelligent checkpointing strategies that preserve simulation
              continuity, trajectory-aware storage tiering, and resource
              allocation optimized for ensemble simulations spanning hundreds of
              independent replicas.
            </p>
          </div>

          <div>
            <p>Streaming Analysis Pipelines</p>{" "}
            <p>
              Real-time trajectory analysis during production runs. Automatic
              detection of convergence issues, adaptive sampling triggers for
              rare events, and parallel downstream analysis without waiting for
              simulation completion.
            </p>
          </div>
          <div>
            <p> Reproducibility Infrastructure</p>{" "}
            <p>
              Complete provenance tracking from input structures to final
              predictions. Every result traceable to exact software versions,
              force field parameters, and random seeds. Enables rigorous
              comparison across research groups and direct reproduction years
              after initial publication.
            </p>
          </div>
          <p>
            This integration of systems engineering with computational science
            enables research at scales and reliability levels that neither
            discipline achieves in isolation. The rarest skill is building
            systems that scientists can trust.
          </p>
        </div>

        <div>
          <p>About</p>
          <p>Professional Summary</p>
          <div>
            <p>
              I work at the intersection of systems engineering and
              computational molecular science, building infrastructure that
              enables scientific discovery at scale.
            </p>

            <p>
              My systems engineering work focuses on correctness-first design:
              distributed systems where failure modes are understood and handled
              explicitly, performance optimizations grounded in measurement, and
              abstractions that simplify rather than obscure. I work primarily
              in Golang and Rust, with fullstack experience in TypeScript for
              internal tooling.
            </p>
            <p>
              My computational biochemistry work applies rigorous quantitative
              methods to structure-based drug design and vaccine development. I
              prioritize reproducibility, validation against experimental data,
              and honest assessment of where computational methods succeed and
              where they fail.
            </p>

            <p>
              The combination is intentional. Scientific computing
              infrastructure is often treated as secondary concern, leading to
              irreproducible results and wasted resources. The field needs
              engineers who understand both domains deeply enough to build
              systems that serve scientific rigor rather than merely execute
              code.
            </p>
          </div>
        </div>

        <div>
          <p>Long-term Focus</p>
          <p>
            Building robust computational systems that accelerate molecular
            discovery while maintaining the reproducibility and methodological
            rigor that science demands.
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>Contact</p>
          <div>
            <p>github</p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </main>
  );
}
