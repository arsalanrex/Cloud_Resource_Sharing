# Decentralized Cloud Gateway for Peer-to-Peer Resource Sharing


To get started, take a look at src/app/page.tsx.

## Architecture Diagram

```mermaid
graph TD
    subgraph User Interface
        A[User]
        style A fill:#f9f,stroke:#333,stroke-width:2px
    end

    subgraph Application Layer
        B(Local Flask Server) --> C{ResPool Gateway};
        style B fill:#ccf,stroke:#333,stroke-width:2px
        style C fill:#ccf,stroke:#333,stroke-width:2px
        B -- API Request --> C;
    end

    subgraph Core Resource Management
        C -- Resource Registration/Request --> D[(Resource Management API)];
        D --> E[Decentralized Resource Matching Algorithm];
        E -- Match Found --> F{Available Resources};
        style D fill:#fcf,stroke:#333,stroke-width:2px
        style E fill:#fcf,stroke:#333,stroke-width:2px
        style F fill:#cfc,stroke:#333,stroke-width:2px
    end

    subgraph Resource Provider Infrastructure
        F -- Allocation --> G[Resource Providers];
        G -- Compute Resource --> H(Virtual Machine/Container);
        H -- Monitoring Data --> C;
        style G fill:#cfc,stroke:#333,stroke-width:2px
        style H fill:#cfc,stroke:#333,stroke-width:2px
        classDef resource fill:#cfc,stroke:#333,stroke-width:2px;
        class F,G,H resource;
    end

    subgraph GenAI Resource Optimization
        I[Resource Utilization Data] --> J(Resource Optimization Suggestions Flow);
        J --> K{Optimization Suggestions};
        style I fill:#ffc,stroke:#333,stroke-width:2px
        style J fill:#fcf,stroke:#333,stroke-width:2px
        style K fill:#ccf,stroke:#333,stroke-width:2px
        H -- Utilization Metrics --> I;
        C -- Aggregate Metrics --> I;
    end

    A --> B;
    C -- API Response --> B;
    K -- Display/Action --> A;
```

**Explanation:**

*   **User Interface:** The user interacts with the system via a web interface, represented by "User".
*   **Application Layer:**
    *   A local Flask server handles API requests from users.
    *   It forwards these requests to the ResPool Gateway.
*   **Core Resource Management:**
    *   The ResPool Gateway provides a Resource Management API for registration and allocation requests.
    *   A decentralized resource matching algorithm finds optimal resource matches.
    *   Available resources are represented by "Available Resources."
*   **Resource Provider Infrastructure:**
    *   Resource providers contribute their resources.
    *   Compute resources are actual virtual machines or containers.
    *   Resource providers send monitoring data back to the ResPool Gateway.
*   **GenAI Resource Optimization**
    * Resource utilization data is gathered from the compute resources.
    * This data is fed into a GenAI flow which provides optimization suggestions.
    * These suggestions are returned to the user.

